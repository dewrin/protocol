import {
	DIP55Instance,
	TreasuryFeeInstance,
} from '../../types/truffle-contracts'
import { DEFAULT_ADDRESS } from '../test-lib/const'
import { DevProtocolInstance } from '../test-lib/instance'
import BigNumber from 'bignumber.js'
import { batchRandom } from './utils'
import { validateNotOwnerErrorMessage } from '../test-lib/utils/error'
contract('DIP55', ([deployer, treasury, capSetter, uesr]) => {
	let treasuryFee: TreasuryFeeInstance
	let dip55: DIP55Instance
	let dev: DevProtocolInstance

	before(async () => {
		dev = new DevProtocolInstance(deployer)
		await dev.generateAddressConfig()
		await dev.generateDev()
		await dev.dev.mint(deployer, new BigNumber(1e18).times(10000000))
		dip55 = await artifacts.require('DIP55').new(dev.addressConfig.address)
		treasuryFee = await artifacts
			.require('TreasuryFee')
			.new(dev.addressConfig.address)
	})

	describe('DIP55; rewards', () => {
		it('holdersShare equals TreasuryFee', async () => {
			const method = 'rewards'
			const stake = new BigNumber(1e18).times(220000)
			expect((await dip55[method](stake, 1)).toString()).to.be.equal(
				(await treasuryFee[method](stake, 1)).toString()
			)
			const assets = new BigNumber(2000)
			const per1010 = new BigNumber(1e18).times(1010000)
			expect((await dip55[method](per1010, assets)).toString()).to.be.equal(
				(await treasuryFee[method](per1010, assets)).toString()
			)
			const per2170 = new BigNumber(1e18).times(2170000)
			expect((await dip55[method](per2170, assets)).toString()).to.be.equal(
				(await treasuryFee[method](per2170, assets)).toString()
			)
			const per9560 = new BigNumber(1e18).times(9560000)
			expect((await dip55[method](per9560, assets)).toString()).to.be.equal(
				(await treasuryFee[method](per9560, assets)).toString()
			)
			expect((await dip55[method](0, 99999)).toString()).to.be.equal(
				(await treasuryFee[method](0, 99999)).toString()
			)
			const stake2 = new BigNumber(1e18).times(220000)
			expect((await dip55[method](stake2, 0)).toString()).to.be.equal(
				(await treasuryFee[method](stake2, 0)).toString()
			)
			const stake3 = new BigNumber(1e18).times(10000000)
			expect((await dip55[method](stake3, 99999)).toString()).to.be.equal(
				(await treasuryFee[method](stake3, 99999)).toString()
			)
		})
	})
	describe('DIP55; holdersShare', () => {
		it('holdersShare equals TreasuryFee', async () => {
			const method = 'holdersShare'
			const [a, b, c, d, e, f] = batchRandom()
			expect((await dip55[method](a, b)).toString()).to.be.equal(
				(await treasuryFee[method](a, b)).toString()
			)
			expect((await dip55[method](c, d)).toString()).to.be.equal(
				(await treasuryFee[method](c, d)).toString()
			)
			expect((await dip55[method](e, f)).toString()).to.be.equal(
				(await treasuryFee[method](e, f)).toString()
			)
			expect((await dip55[method](a, 0)).toString()).to.be.equal(
				(await treasuryFee[method](a, 0)).toString()
			)
			expect((await dip55[method](a, 1)).toString()).to.be.equal(
				(await treasuryFee[method](a, 1)).toString()
			)
			expect((await dip55[method](0, a)).toString()).to.be.equal(
				(await treasuryFee[method](0, a)).toString()
			)
			expect((await dip55[method](1, a)).toString()).to.be.equal(
				(await treasuryFee[method](1, a)).toString()
			)
		})
	})
	describe('DIP55; authenticationFee', () => {
		it('authenticationFee equals TreasuryFee', async () => {
			const method = 'authenticationFee'
			const [a, b, c, d, e, f] = batchRandom()
			expect((await dip55[method](a, b)).toString()).to.be.equal(
				(await treasuryFee[method](a, b)).toString()
			)
			expect((await dip55[method](c, d)).toString()).to.be.equal(
				(await treasuryFee[method](c, d)).toString()
			)
			expect((await dip55[method](e, f)).toString()).to.be.equal(
				(await treasuryFee[method](e, f)).toString()
			)
			expect((await dip55[method](a, 0)).toString()).to.be.equal(
				(await treasuryFee[method](a, 0)).toString()
			)
			expect((await dip55[method](a, 1)).toString()).to.be.equal(
				(await treasuryFee[method](a, 1)).toString()
			)
			expect((await dip55[method](0, a)).toString()).to.be.equal(
				(await treasuryFee[method](0, a)).toString()
			)
			expect((await dip55[method](1, a)).toString()).to.be.equal(
				(await treasuryFee[method](1, a)).toString()
			)
		})
	})
	describe('DIP55; marketApproval', () => {
		it('marketApproval equals TreasuryFee', async () => {
			const method = 'marketApproval'
			const [a, b, c, d, e, f] = batchRandom()
			expect((await dip55[method](a, b)).toString()).to.be.equal(
				(await treasuryFee[method](a, b)).toString()
			)
			expect((await dip55[method](c, d)).toString()).to.be.equal(
				(await treasuryFee[method](c, d)).toString()
			)
			expect((await dip55[method](e, f)).toString()).to.be.equal(
				(await treasuryFee[method](e, f)).toString()
			)
			expect((await dip55[method](a, 0)).toString()).to.be.equal(
				(await treasuryFee[method](a, 0)).toString()
			)
			expect((await dip55[method](a, 1)).toString()).to.be.equal(
				(await treasuryFee[method](a, 1)).toString()
			)
			expect((await dip55[method](0, a)).toString()).to.be.equal(
				(await treasuryFee[method](0, a)).toString()
			)
			expect((await dip55[method](1, a)).toString()).to.be.equal(
				(await treasuryFee[method](1, a)).toString()
			)
		})
	})
	describe('DIP55; policyApproval', () => {
		it('policyApproval equals TreasuryFee', async () => {
			const method = 'policyApproval'
			const [a, b, c, d, e, f] = batchRandom()
			expect(await treasuryFee[method](a, b)).to.be.equal(
				await dip55[method](a, b)
			)
			expect(await treasuryFee[method](c, d)).to.be.equal(
				await dip55[method](c, d)
			)
			expect(await treasuryFee[method](e, f)).to.be.equal(
				await dip55[method](e, f)
			)
			expect(await treasuryFee[method](a, 0)).to.be.equal(
				await dip55[method](a, 0)
			)
			expect(await treasuryFee[method](a, 1)).to.be.equal(
				await dip55[method](a, 1)
			)
			expect(await treasuryFee[method](0, a)).to.be.equal(
				await dip55[method](0, a)
			)
			expect(await treasuryFee[method](1, a)).to.be.equal(
				await dip55[method](1, a)
			)
		})
	})
	describe('DIP55; marketVotingBlocks', () => {
		it('marketVotingBlocks equals TreasuryFee', async () => {
			const method = 'marketVotingBlocks'
			expect((await dip55[method]()).toString()).to.be.equal(
				(await treasuryFee[method]()).toString()
			)
		})
	})
	describe('DIP55; policyVotingBlocks', () => {
		it('policyVotingBlocks equals TreasuryFee', async () => {
			const method = 'policyVotingBlocks'
			expect((await dip55[method]()).toString()).to.be.equal(
				(await treasuryFee[method]()).toString()
			)
		})
	})
	describe('DIP55; shareOfTreasury', () => {
		it('shareOfTreasury equals TreasuryFee.', async () => {
			const method = 'shareOfTreasury'
			expect((await dip55[method](100)).toString()).to.be.equal(
				(await treasuryFee[method](100)).toString()
			)
			expect((await dip55[method](220000)).toString()).to.be.equal(
				(await treasuryFee[method](220000)).toString()
			)
			expect((await dip55[method](0)).toString()).to.be.equal(
				(await treasuryFee[method](0)).toString()
			)
		})
	})
	describe('DIP55; treasury', () => {
		it('returns the treasury address.', async () => {
			await dip55.setTreasury(treasury)
			const result = await dip55.treasury()
			expect(result).to.be.equal(treasury)
		})
		it('the default value is 0 address.', async () => {
			const treasuryFeeTmp = await artifacts
				.require('TreasuryFee')
				.new(dev.addressConfig.address)
			const result = await treasuryFeeTmp.treasury()
			expect(result).to.be.equal(DEFAULT_ADDRESS)
		})
		it('No one but the owner can set the address.', async () => {
			const result = await dip55
				.setTreasury(treasury, {
					from: uesr,
				})
				.catch((err: Error) => err)
			validateNotOwnerErrorMessage(result)
		})
	})
	describe('DIP55; capSetter', () => {
		it('returns the setter address.', async () => {
			await dip55.setCapSetter(capSetter)
			const result = await dip55.capSetter()
			expect(result).to.be.equal(capSetter)
		})
		it('the default value is 0 address.', async () => {
			const treasuryFeeTmp = await artifacts
				.require('TreasuryFee')
				.new(dev.addressConfig.address)
			const result = await treasuryFeeTmp.capSetter()
			expect(result).to.be.equal(DEFAULT_ADDRESS)
		})
		it('No one but the owner can set the address.', async () => {
			const result = await dip55
				.setCapSetter(capSetter, {
					from: uesr,
				})
				.catch((err: Error) => err)
			validateNotOwnerErrorMessage(result)
		})
	})
})