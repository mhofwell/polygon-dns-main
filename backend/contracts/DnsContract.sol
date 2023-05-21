// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import {StringUtils} from "./libraries/StringUtils.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "hardhat/console.sol";

contract DnsContract {
    constructor() {
        console.log("Hello World!");
    }
}
