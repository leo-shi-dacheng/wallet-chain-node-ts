type Int = number;
type uint64 = number;

type AccountBalance = {
  final_balance: Int;
  n_tx: Int;
  total_received: Int;
}

type UnspentOutput = {
  tx_hash_big_endian: string;
  tx_hash: string;
  tx_output_n: uint64;
  script: string;
  value: uint64;
  value_hex: string;
  confirmations: uint64;
  tx_index: uint64;
}

type UnspentOutputList = {
  notice: string;
  unspent_outputs: UnspentOutput[];
}

type GasFee = {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  bestTransactionFee: string;
  recommendedGasPrice: string;
  rapidGasPrice: string;
  standardGasPrice: string;
  slowGasPrice: string;
}

type GasFeeData = {
  data: GasFee[];
  code: string;
  msg: string;
}