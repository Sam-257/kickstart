const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Remove Build Dir
const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

// Compile contract
const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contracts;

// make new build folder
fs.ensureDirSync(buildPath);

// making a separate file for every contract in build
for(let contract in output){
    fs.outputJsonSync(path.resolve(buildPath,contract.replace(':','') + '.json'), output[contract]);
}