import * as fs from 'fs';
import * as yaml from 'js-yaml';
import WalletDispatcher from './walletdispatcher/dispatcher';
const file = fs.readFileSync('./config.yml', 'utf8');


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