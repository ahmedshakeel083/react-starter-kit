#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit'});
  }catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true
}


const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://code.techjini.com/techjini-development/CodeAlley/react-native-srarter-kit.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repositry with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log(`Installing dependecies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("Congratulations, You can start the development now");
console.log(`cd ${repoName} && npm run dev`);