'use strict'

import md5 from './md5'
import fs from 'fs'
const filename = process.argv[2]

md5(fs.ReadStream(filename)).then((sum) => {
  console.log(`MD5 sum of "${filename}" is ${sum}`)
}).catch((err) => {
  console.log(`something is wrong: ${err}`)
})
