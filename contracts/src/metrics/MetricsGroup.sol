pragma solidity ^0.5.0;

import {UsingConfig} from "contracts/src/common/config/UsingConfig.sol";
import {UsingStorage} from "contracts/src/common/storage/UsingStorage.sol";
import {AddressValidator} from "contracts/src/common/validate/AddressValidator.sol";
import {IGroup} from "contracts/src/common/interface/IGroup.sol";

contract MetricsGroup is UsingConfig, UsingStorage, IGroup {
	// solium-disable-next-line no-empty-blocks
	constructor(address _config) public UsingConfig(_config) {}

	function addGroup(address _addr) external {
		new AddressValidator().validateAddress(
			msg.sender,
			config().metricsFactory()
		);

		eternalStorage().setBool(getGroupKey(_addr), true);
		uint256 totalCount = eternalStorage().getUint(getTotalCountKey());
		totalCount++;
		eternalStorage().setUint(getTotalCountKey(), totalCount);
	}

	function isGroup(address _addr) external view returns (bool) {
		return eternalStorage().getBool(getGroupKey(_addr));
	}

	function totalIssuedMetrics() public view returns (uint256) {
		return eternalStorage().getUint(getTotalCountKey());
	}

	function getTotalCountKey() private pure returns (bytes32) {
		return keccak256(abi.encodePacked("_totalCount"));
	}
}
