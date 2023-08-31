import assert from 'assert'
import * as lib from '../lib.ts'

describe('sleep', () => {
    it('should terminate', async () => {
        await lib.sleep(10)
    }).timeout(20)

    it('does wait', async () => {
        const t1 = Date.now()
        await lib.sleep(10)
        const t2 = Date.now()
        assert(t2 - t1 >= 10)
    }).timeout(20)
})
