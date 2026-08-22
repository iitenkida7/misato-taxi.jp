// Convert flat SSG output (recruit.html) into directory-style (recruit/index.html)
// so the S3 + CloudFront URL scheme (/recruit, /ir) keeps working as before.
import { readdirSync, mkdirSync, renameSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'

for (const file of readdirSync(dist)) {
  if (!file.endsWith('.html') || file === 'index.html') continue
  const name = file.slice(0, -'.html'.length)
  mkdirSync(join(dist, name), { recursive: true })
  renameSync(join(dist, file), join(dist, name, 'index.html'))
  console.log(`postbuild: ${file} -> ${name}/index.html`)
}
