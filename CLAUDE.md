# CLAUDE.md — misato-taxi.jp 技術方針

三郷交通（埼玉県三郷市のタクシー会社）の静的コーポレートサイト。全3ページの小規模ブローシャサイト。

## 技術スタック

- **Hono** + `hono/jsx` — ページ/コンポーネントを JSX(TSX) で記述
- **@hono/vite-ssg** — 登録ルートをクロールして静的HTMLを生成（サーバーは常駐しない）
- **Tailwind CSS v4** — `@tailwindcss/vite`。設定はCSSファースト（`@import "tailwindcss"`）
- **Vite** / **Bun 1.4** — ランタイム・パッケージマネージャ
- **GTM** `GTM-MBND75W`（`@nuxtjs/gtm` の置き換え。素のスニペットを `src/index.tsx` に内包）

> 旧スタックは Nuxt 2（`nuxt/`、EOL）。`nuxt/` はレガシーで、後続PRで削除予定。新規開発は必ず `hono/` 側で行う。

## ディレクトリ構成（`hono/`）

```
hono/
  src/
    index.tsx            # Honoアプリ本体。jsxRenderer(レイアウト/head/GTM) + 全ルート定義
    style.css            # Tailwind v4 エントリ + カスタム @layer
    global.d.ts          # ContextRenderer の head props 型拡張
    components/
      Header.tsx         # 固定ヘッダ + モバイルメニュー
      TelButton.tsx      # 電話CTAボタン
    pages/
      Home.tsx / Recruit.tsx / Ir.tsx
  scripts/postbuild.ts   # フラットHTML → ディレクトリ形式へ整形
  public/                # そのまま dist/ にコピーされる静的資産（favicon, robots.txt, image/*）
  vite.config.ts
```

## ビルド

`bun run build` は3段階（[hono/package.json](hono/package.json)）:

1. `vite build` — SSG。`/` `/recruit` `/ir` を HTML 化（この時点では `recruit.html` のようにフラット）
2. `vite build --mode client` — Tailwind CSS を `dist/static/style.css` に出力（`emptyOutDir:false` でHTMLを消さない）
3. `bun run scripts/postbuild.ts` — `recruit.html` → `recruit/index.html` に変換

**postbuild が必須な理由**: @hono/vite-ssg はフラットな `*.html` を吐くが、本番 S3 + CloudFront は `recruit/index.html`（ディレクトリ形式）で `/recruit` を配信している。旧 Nuxt の生成物と同じ構造に揃えることで、インフラ側の設定を一切変えずに動く。出力構造を変えるとURLが壊れるので注意。

CSS のリンクは環境で切替（[hono/src/index.tsx](hono/src/index.tsx)）: 本番 `/static/style.css` / dev `/src/style.css`。

## ローカル開発（Docker のみ）

Bun はこの環境にネイティブ導入していない。**必ず Docker（`oven/bun`）経由**で動かす。

```
make install   # docker compose build + bun install
make up        # http://localhost:3000 （Vite dev, HMR）
make down
make generate  # dist/ を生成（= bun run build）
make logs
```

- dev サーバは port **3000**（`vite.config.ts` で `server.host:true, port:3000`）
- 直接叩く例: `docker run --rm -u 0 -v "$PWD/hono":/app oven/bun:1.4 sh -c "bun install && bun run build"`

## コーディング規約（hono/jsx）

- 属性は **`class`**（`className` ではない）。SVG等は **リテラルのケバブケース**（`stroke-linecap`, `stroke-width`）
- Tailwind v4 の不透明度は **スラッシュ記法**（`bg-black/20`、`bg-opacity-*` は不可）
- グローバルなタグスタイルは `src/style.css` の `@layer base`（例: `body{@apply pt-16}`）。ページ側のユーティリティが優先される
- 画像等の静的資産は `public/` に置き、`/image/...` の絶対パスで参照
- ページ単位の head（title/description/canonical/JSON-LD）は `c.render(<Page/>, { ... })` の props で渡す。型は `global.d.ts` の `ContextRenderer` 拡張

### ページ追加手順

1. `src/pages/Foo.tsx` を作成
2. `src/index.tsx` に `app.get('/foo', (c) => c.render(<Foo/>, { title, description, canonical }))` を追加
3. `bun run build` → SSGが自動でルートを検出、postbuild が `foo/index.html` を生成

## デプロイ（現行踏襲）

- **GitHub Actions**（[.github/workflows/blank.yml](.github/workflows/blank.yml)）: `main` への push で発火
- `oven-sh/setup-bun` → `bun install --frozen-lockfile` → `bun run build` → `aws s3 sync ./hono/dist` → CloudFront invalidation（`ap-northeast-1`）
- Secrets: `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` / `S3_BUCKET_NAME` / `CLOUDFRONT_DISTRIBUTION_ID`

## リポジトリの注意点

- **ブランチ**: GitHub の既定ブランチは古い `master`。**本番/デプロイ対象は `main`**（`master` より先行）。PR は `main` をベースに作る
- ⚠️ **`main` へのマージ = 本番S3へ自動デプロイ**。マージ時は本番反映される前提で
- `bun.lock` はコミットする（CI が `--frozen-lockfile` で使う）。`hono/node_modules` `hono/dist` は gitignore
