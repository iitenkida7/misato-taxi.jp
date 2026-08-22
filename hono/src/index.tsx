import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Recruit } from './pages/Recruit'
import { Ir } from './pages/Ir'

const GTM_ID = 'GTM-MBND75W'

// Google Tag Manager snippet (replaces @nuxtjs/gtm)
const gtmHead = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`

// Toggles the mobile navigation menu (replaces Vue's reactive state)
const menuScript = `(function(){var b=document.getElementById('menu-toggle'),m=document.getElementById('mobile-menu');if(b&&m){b.addEventListener('click',function(){var open=!m.classList.toggle('hidden');b.setAttribute('aria-expanded',String(open));});}})();`

// LocalBusiness structured data (was global in nuxt.config.js)
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '三郷交通',
  image: 'https://misato-taxi.jp/image/emblem.png',
  description: '埼玉県三郷市でタクシーサービスを提供しています。',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '埼玉県三郷市新和３－１４７',
    postalCode: '341-0034',
    addressLocality: '三郷市',
    addressRegion: '埼玉県',
    addressCountry: 'JP',
  },
  telephone: '048-952-3310',
  url: 'https://misato-taxi.jp/',
  sameAs: [],
}

const app = new Hono()

app.use(
  '*',
  jsxRenderer(
    ({ children, title, description, canonical, jsonLd }) => (
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="author" content="misato-taxi" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="canonical" href={canonical} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
          />
          {jsonLd ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          ) : null}
          <script dangerouslySetInnerHTML={{ __html: gtmHead }} />
          {import.meta.env.PROD ? (
            <link href="/static/style.css" rel="stylesheet" />
          ) : (
            <link href="/src/style.css" rel="stylesheet" />
          )}
        </head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          <Header />
          {children}
          <script dangerouslySetInnerHTML={{ __html: menuScript }} />
        </body>
      </html>
    ),
    { docType: true }
  )
)

app.get('/', (c) =>
  c.render(<Home />, {
    title: '三郷交通 | 埼玉県三郷市のタクシー配車サービス',
    description:
      '埼玉県三郷市でタクシーをお探しなら三郷交通へ。三郷駅、三郷中央駅、新三郷、ららぽーと周辺など対応。24時間配車可能。048-952-3310',
    canonical: 'https://misato-taxi.jp/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'ホーム',
          item: 'https://misato-taxi.jp/',
        },
      ],
    },
  })
)

app.get('/recruit', (c) =>
  c.render(<Recruit />, {
    title: 'タクシードライバー採用 | 三郷交通求人情報',
    description:
      'タクシードライバー大募集中！埼玉県三郷市。女性乗務員大歓迎。経験不問。2種免許取得費用全額負担。月給25万円～。定年後の方も大歓迎。048-952-3310',
    canonical: 'https://misato-taxi.jp/recruit',
  })
)

app.get('/ir', (c) =>
  c.render(<Ir />, {
    title: '会社概要 | 三郷交通',
    description:
      '三郷交通の会社概要。埼玉県三郷市に拠点を置くタクシー会社。一般乗用旅客自動車運送事業を営んでいます。',
    canonical: 'https://misato-taxi.jp/ir',
  })
)

export default app
