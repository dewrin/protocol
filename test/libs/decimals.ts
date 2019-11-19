contract('Decimals', ([deployer]) => {
	const decimalsTestContract = artifacts.require('DecimalsTest')
	describe('outOf', () => {
		it('outOf returns ratio of the first args out of second args', async () => {
			const decimalsTest = await decimalsTestContract.new({
				from: deployer
			})
			const {0: resultBN, 1: basisBN} = await decimalsTest.outOf(28, 70)
			const result = Number(resultBN.toString())
			const basis = Number(basisBN.toString())
			const answer = 28 / 70
			expect(result / basis).to.be.equal(answer)
		})
	})

	describe('multipliedBy', () => {
		it('multipliedBy returns result of maybe includes decimals calculation between two numbers', async () => {
			const decimalsTest = await decimalsTestContract.new({
				from: deployer
			})
			const a = 70
			const b = 0.4
			const decimals = 10
			const {0: resultBN, 1: basisBN} = await decimalsTest.multipliedBy(
				a,
				b * decimals,
				decimals
			)
			const result = Number(resultBN.toString())
			const basis = Number(basisBN.toString())
			const answer = 70 * 0.4
			expect(result / basis).to.be.equal(answer)
		})
	})
})
