import { logger } from 'ethers'
type Server = {
  // yaml:"port“
  port: string;
}

type RPC = {
  // yaml:"rpc_url
  RPCURL: string;
  // yaml:"rpc_user
  RPCUser: string;
  // yaml:"rpc_url
  RPCPass: string;
}

type Node = {
  // yaml:"rpcs"
  RPCs: RPC[];
  // yaml:"tp_api_url"
  TpApiUrl: string;
  // yaml:"tp_api_key"
  TpApiKey: string;
  // TODO uint64
  // yaml:"vonfirmations"
  Confirmations: bigint;
  // yaml:"apiToken"
  ApiToken: string;
}

type SolanaNode = {
  // yaml:"public_url"
  PublicUrl: string;
  // yaml:"network"
  NetWork: string;
  // yaml:"NonceAccountAddr"
  NonceAccountAddr: string;
  // yaml:"FeeAccountPriKey"
  FeeAccountPriKey: string;
}

type Fullnode = {
  // yaml:"btc"
  Btc: Node;
  // yaml:"eth"
  Eth: Node;
  // yaml:"arbi"
  Arbi: Node;
  // yaml:"op"
  Op: Node;
  // yaml:"zksync"
  Zksync: Node;
  // yaml:"bsc"
  Bsc: Node;
  // yaml:"heco"
  Heco: Node;
  // yaml:"avax"
  Avax: Node;
  // yaml:"evmos"
  Evmos: Node;
  // yaml:"polygon"
  Polygon: Node;
  // yaml:"trx"
  Trx: Node;
  // yaml:"near"
  Near: Node;
  // yaml:"alog"
  Algo: Node;
  // yaml:"xrp"
  Xrp: Node;
  // yaml:"solana"
  Sol: Node;
  // yaml:"cosmos"
  Cosmos: Node;
  // yaml:"filecoin"
  FileCoin: Node;
  // yaml:"dot"
  Dot: Node;
  // yaml:"eos"
  Eos: Node;
  // yaml:"oasis"
  Oasis: Node;
  // yaml:"tezos"
  Tezos: Node;
  // yaml:"aptos"
  Aptos: Node;
  // yaml:"egld"
  Egld: Node;
  // yaml:"mantle"
  Mantle: Node;
  // yaml:"scroll"
  Scroll: Node;
  // yaml:"base"
  Base: Node;
  // yaml:"linea"
  Linea: Node;
  // yaml:"ada"
  Ada: Node;
}

type Config {
  // yaml:"server"
  server: Server;
  // yaml:"fullnode"
  fullnode: Fullnode;
  // yaml:"network"
  network: string;
  // yaml:"chains"
  chains: string[];
}

enum  NetWorkType {
  Mainnet = 0,
  Testnet = 1,
  RegTest = 2,
}

function initConfig(path: string): Config {
  return config;
}

export {
  initConfig,
  NetWorkType,
  Config,
  Server,
  SolanaNode
}