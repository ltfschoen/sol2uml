
import EtherscanParser from '../etherscanParser'

const etherDelta = '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819'

describe('Etherscan', () => {


    test('get source code', async() => {

        const etherscan = new EtherscanParser('HPD85TXCG1HW3N5G6JJXK1A7EE5K86CYBJ')

        const sourceCode = await etherscan.getSourceCode('0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413')
        expect(sourceCode).toHaveLength(1)
    })

    test('Get UML Classes', async() => {

        const etherscan = new EtherscanParser('HPD85TXCG1HW3N5G6JJXK1A7EE5K86CYBJ')

        const umlClasses = await etherscan.getUmlClasses(etherDelta)

        expect(umlClasses).toHaveLength(7)
    })

    test('Try and get UML Classes when address does not have verified source code', async() => {

        const etherscan = new EtherscanParser('HPD85TXCG1HW3N5G6JJXK1A7EE5K86CYBJ')

        const umlClasses = await etherscan.getUmlClasses('0x0000000000000000000000000000000000000001')

        expect(umlClasses).toHaveLength(0)
    })
})
