import { exportAllDeclaration } from '@babel/types'
import { it } from 'node:test'
import { describe } from 'yargs'
import { aleatoryNumber } from './service'

describe('Testa aleatoryNumber de script.js', () => {

    it('testa sé aleatoryNumber é chamada', () => {
        aleatoryNumber()
        
        expect(aleatoryNumber).toHaveBeenCalled()
    })
})