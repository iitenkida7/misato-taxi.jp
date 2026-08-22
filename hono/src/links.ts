// 本番(S3+CloudFront)は REST オリジンでディレクトリインデックスの書き換えが無いため、
// フラットな実ファイル (ir.html / recruit.html) を直接指す必要がある。
// dev(@hono/vite-dev-server)はクリーンなルート (/ir) で配信されるので、環境で切り替える。
const ext = import.meta.env.PROD ? '.html' : ''

export const paths = {
  home: '/',
  ir: `/ir${ext}`,
  recruit: `/recruit${ext}`,
}
