'use strict'
import crypto from 'crypto'
import fs from 'fs'
const filename = process.argv[2]
const shasum = crypto.createHash('md5')
const s = fs.ReadStream(filename)

s.on('data', (d) => shasum.update(d))

s.on('end', () => {
  const d = shasum.digest('hex')
  console.log(`${d} ${filename}`)
})
