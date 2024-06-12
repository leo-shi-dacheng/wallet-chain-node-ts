import * as fs from 'fs';
import * as yaml from 'js-yaml';
// import gprc from '@grpc/grpc-js';
// import protoLoader from '@grpc/proto-loader';
// import { promisify } from 'util';
import { Config } from './config/config'
import WalletDispatcher from './walletdispatcher/dispatcher';
const file = fs.readFileSync('./config.yml', 'utf8');

function loadConfig(path: string): Config {
  const file = fs.readFileSync(path, 'utf8');
  return yaml.parse(file) as Config;
}

function main() {
  try {
    const config = yaml.load(file);
    if (!config) throw new Error('Config file is empty');
    console.log(config);
    // Todo
    const dispatcher = new WalletDispatcher(config);

  } catch (error) {
    throw new Error(error as string);
  }
  
}

main();