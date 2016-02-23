'use strict'
import crypto from 'crypto'
const shasum = crypto.createHash('md5')

export default function md5 (stream, callback) {
  stream.on('data', (d) => shasum.update(d))
  stream.on('end', () => {
    const sum = shasum.digest('hex')
    callback && callback.call(sum, sum)
  })
}
