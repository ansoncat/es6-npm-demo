'use strict'

import md5 from '../lib/md5'
import fs from 'fs'
import { expect } from 'chai'

const filename = './test/TEST_INPUT'

describe('MD5', function () {
  it('should sum md5 correctly', async function () {
    const sum = await md5(fs.ReadStream(filename))
    expect(sum).to.equal('b711b1aad4df9f6e7f5b511531cc5077')
  })
})
