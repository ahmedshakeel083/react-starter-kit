#!/usr/bin/env node
import { execSync } from "child_process";

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
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ahmedshakeel083/react-starter-kit.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const runLocalHostCommand = `cd ${repoName} && npm run dev`;

console.log("\x1b[32m%s\x1b[0m",`Cloning the repositry with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(1);

console.log("\x1b[32m%s\x1b[0m", `Installing dependecies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(1);

console.log("\x1b[32m%s\x1b[0m", "Congratulations, You can start the development now \nInitializing your local server");
const runLocalHost = runCommand(runLocalHostCommand);
if(!runLocalHost) process.exit(1);