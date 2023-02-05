import { utils } from 'ethers';
import { Contract } from "@ethersproject/contracts";
import { Localhost, Mainnet, useEthers } from '@usedapp/core';
import { STAKE_ADDRESS, TOKEN_ADDRESS } from '../constants/address';
import STAKE_ABI from '../contracts/DLC.json';
import ERC20ABI from '../contracts/ERC20ABI.json';


export function useTokenContract(){
    return new Contract(TOKEN_ADDRESS[Localhost.chainId], new utils.Interface(ERC20ABI));
}

export function useStakeContract() {
    const { chainId } = useEthers();
    return new Contract(STAKE_ADDRESS[Localhost.chainId], new utils.Interface(STAKE_ABI.abi));
}