
import WalletAdaptor from '../fallback/adaptor'

const confirms = 1;
const btcDecimals = 8;
const btcFeeBlocks = 3;
const ChainName = "Bitcoin";
const _symbol = "BTC";
const BlockChainApiUrl = "https://blockchain.info";
const OkLinkUrl = "https://blockchain.info";


type Chain = {
  WalletAdaptor
}

class BTCWalletAdaptor  extends WalletAdaptor{
  constructor() {
    super();
  }

  getChain() {
    return ChainName;
  }

  GetSupportCoins() {
    return _symbol;
  }

  GetNonce() {

  }

  GetGasPrice() {

  }

  SendTx() {
    
  }
}

export default BTCWalletAdaptor;