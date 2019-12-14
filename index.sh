#!/bin/bash

# npx create-react-parcel my-app

# Create directory
mkdir $1

# Create src and components folder
mkdir $1/src $1/src/components

# Create package.json
cat <<EOF >$1/package.json
{
  "name": "react-parcel",
  "version": "0.1.0",
  "description": "",
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html --out-dir docs --public-url ./",
    "rebuild": "rm -rf ./docs && npm run build"
  },
  "license": "MIT",
  "dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  },
  "devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "@babel/preset-react": "^7.7.4",
    "parcel-bundler": "^1.12.3"
  }
}
EOF

cat <<EOF >$1/src/components/App.js
import React from "react";

export default () => (
  <>
    <h1>
      Welcome to Create React Simple App! 📦 Build with Parcel 🚀 Deploy to
      Github Pages{" "}
    </h1>
  </>
);
EOF

cat <<EOF >$1/src/index.html
<html>
  <head>
    <title>Create React Simple</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.js"></script>
  </body>
</html>
EOF

cat <<EOF >$1/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
EOF

cat <<EOF >$1/.gitignore
node_modules
dist
.cache
EOF

cat <<EOF >$1/README.md

# Create React Simple App

> by [Ashwanth A R](https://github.com/ashwanth1109)

Built with Parcel.
Note: Also, has support for deploying your site to github pages.

Inspired by the nano-react-app project by Adrian Li

### Booting Up

After you have run npx create-react-parcel my-app, cd into your directory:

> cd my-app

You should have a src directory, .gitignore, package.json, and README files.

To get started, you must first install npm dependencies (babel, parcel, and react). Run the following command in your terminal:

> npm install

This will create the node_modules folder for you.

### Running the project

You can have parcel bundle up your app into a dist folder and run it on a server for you. Simply run,

> npm start

You can now view your project at http://localhost:1234

Additionally parcel will create a ".cache" folder.

> Parcel compiles all of your files in isolation in parallel inside workers, caching all of them as it goes along. - from the [Official Docs](https://github.com/parcel-bundler/parcel#introduction)

### Building the project

Before you can deploy your project to Github pages, you must first build your project. To build, run:

> npm run build

This will generate a docs folder that will contain an index html file, src js file and src map file. It is called docs so that we can push it to Github pages for deployment.

### Pushing your github project

Skip this section if you know how to create a repo on github with your app.

We must first initialize our repo with:

> git init

To add all your files and commit the changes:

> git add . && git commit -m 'Initial Commit'

Then add your repo to a remote origin and push to Github:


> git remote add origin YOUR_GIT_URL && git push -u origin master


Note: Substitute your git url as appropriate.

### Deploying to github pages

To deploy to github pages, you must configure your repo's settings to publish your app.

To do that,

- Go to "Settings" tab in your repo
- Under "GitHub Pages" section, select your source as "master branch/docs folder"

You will see the page refresh with the following information:

Your site is ready to be published at SOME_URL_HERE

Your app will be deployed at this URL. It can take anywhere between 20 mins to an hour before you can see this published.
EOF