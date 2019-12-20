pragma solidity ^0.5.0;

contract IGroup {
	function isGroup(address _addr) external view returns (bool);

	function addGroup(address _addr) external;

	function name() external pure returns (string memory);

	function getGroupKey(address _addr) internal pure returns (bytes32) {
		return keccak256(abi.encodePacked("_group", _addr));
	}

}
