'use strict'

import md5 from './md5'
import fs from 'fs'
const filename = process.argv[2]
const s = fs.ReadStream(filename)

md5(s).then((sum) => {
  console.log(`MD5 sum of "${filename}" is ${sum}`)
})
