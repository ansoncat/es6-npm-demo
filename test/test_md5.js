'use strict'

import md5 from '../lib/md5'
import fs from 'fs'
const filename = './test/TEST_INPUT'
const s = fs.ReadStream(filename)
import { expect } from 'chai'

describe('MD5', () => {
  it('should sum md5 correctly', (done) => {
    md5(s).then((sum) => {
      expect(sum).to.equal('b711b1aad4df9f6e7f5b511531cc5077')
      done()
    })
  })
})

