import fs from 'node:fs'
import path from 'node:path'
import translate from '@vitalets/google-translate-api'

const root = path.resolve(process.cwd())
const dataPath = path.join(root, 'data', 'scraped-assets.json')
const cachePath = path.join(root, 'data', 'hi-translation-cache.json')

const raw = fs.readFileSync(dataPath, 'utf8')
const json = JSON.parse(raw)

const paragraphs = new Set()
for (const asset of json.assets || []) {
  for (const p of asset.pages || []) {
    // focus about/home content
    const pageName = String(p.page || '').toLowerCase()
    if (pageName.includes('about') || pageName.includes('home')) {
      const text = (p.text_nearby || '').trim()
      if (text) {
        // split paragraphs
        for (const seg of text.split(/\n\n+/)) {
          const t = seg.trim()
          if (t) paragraphs.add(t)
        }
      }
    }
  }
}

const unique = Array.from(paragraphs)

async function main() {
  let cache = {}
  try { cache = JSON.parse(fs.readFileSync(cachePath, 'utf8')) } catch {}

  let updated = 0
  for (const en of unique) {
    if (cache[en]) continue
    const res = await translate(en, { to: 'hi' })
    cache[en] = res.text || en
    updated++
    // write every few items to avoid losing progress
    if (updated % 10 === 0) {
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8')
      process.stdout.write(`Translated ${updated}/${unique.length}...\n`)
    }
  }
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8')
  console.log(`Done. New translations: ${updated}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
