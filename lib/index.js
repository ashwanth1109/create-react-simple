#!/usr/bin/env node

const fs = require("fs");
const {execSync} = require('child_process');
const chalk = require('chalk');

console.log(chalk.bgGreen('Statement Reached'));

const files = require('./helpers/files');
const inquirer = require('./helpers/inquirer');
const srcData = require('./helpers/srcData');


const dir_name = process.argv.slice(2)[0];
const dir = `${files.getCurrentDirectory()}/${dir_name}`;

const logError = (mssg) => console.log(chalk.red(mssg));

const run = async () =>  {
    try {
        const {packageJson} = srcData;
        // CD into child directory
        process.chdir(dir_name);
        packageJson.name = dir_name;

        // Generate package.json file
        const {description, author} = await inquirer.askDetails();
        packageJson.description = description;
        packageJson.author = author;

        fs.writeFileSync(`${dir}/package.json`, JSON.stringify(packageJson));
        fs.writeFileSync(`${dir}/.gitignore`, srcData.gitIgnore);
        fs.writeFileSync(`${dir}/README.md`, srcData.readme);

        // Install all the dependencies
        console.log(chalk.bgGreen('Installing react and react-dom packages'));
        execSync('npm i react react-dom',{stdio: [0,1,2]});

        console.log(chalk.bgGreen('Installing @babel/core, @babel/preset-env, @babel/preset-react and parcel-bundler'));
        execSync('npm i -D @babel/core @babel/preset-env @babel/preset-react parcel-bundler',{stdio: [0,1,2]});

        // Create src directory and cd into it
        fs.mkdirSync(`${dir}/src`);
        process.chdir('src');

        // Create index.html and index.js
        fs.writeFileSync(`${dir}/src/index.html`, srcData.indexHtml);
        fs.writeFileSync(`${dir}/src/index.jsx`, srcData.indexJsx);

        // Create components directory and cd into it
        fs.mkdirSync(`${dir}/src/components`);
        process.chdir('components');
        fs.writeFileSync(`${dir}/src/components/App.jsx`, srcData.appJsx);
        console.log(chalk.bgGreen('src files were created successfully'));
    } catch (e) {
        logError('Error: ', e);
    }
};

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    run();
} else {
    logError('Error: Directory already exists');
}
