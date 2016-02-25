'use strict'
import crypto from 'crypto'
const shasum = crypto.createHash('md5')

export default function md5 (stream) {
  return new Promise((resolve, reject) => {
    stream.on('data', (d) => shasum.update(d))
    stream.on('end', () => {
      const sum = shasum.digest('hex')
      resolve(sum)
    })
    stream.on('error', (err) => {
      reject(err)
    })
  })
}
