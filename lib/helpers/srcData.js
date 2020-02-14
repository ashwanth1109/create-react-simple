
module.exports = {
    indexHtml: `<html lang="en">
  <head>
    <title>Create React Simple</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.jsx"></script>
  </body>
</html>
    `,
    indexJsx: `import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
    `,
    appJsx: `import React from "react";

export default () => (
  <>
    <h1>
      Welcome to Create React Simple App!
    </h1>
    <h3>📦 Build with Parcel</h3>
    <h3>🚀 Deploy to Github Pages</h3>
  </>
);
    `,
    gitIgnore: `node_modules
dist
.cache
.idea`,
    packageJson: {
        name: '',
        version: '1.0.0',
        description: '',
        main: 'index.html',
        author: '',
        scripts: {
            start: 'parcel src/index.html',
            build: 'parcel build src/index.html --out-dir docs --public-url ./',
            rebuild: 'rm -rf ./docs && npm run build'
        },
        license: 'MIT',
        babel: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        }
    },
    readme: `# Create React Simple App
> by [Ashwanth A R](https://github.com/ashwanth1109)

Built with Parcel.
Note: Also has support for deploying your site to github pages.

Inspired by the 'nano-react-app' project by Adrian Li

### Booting Up

To create your simple react app, run:

> npx create-react-simple my-app

### Running the project

\`\`\`
cd my-app
npm start
\`\`\`

You can now view your project at \`http://localhost:1234\`

### Building the project

Before you can deploy your project to Github pages, you must first build your project. To build, run:

\`\`\`
npm run build
\`\`\`

This will generate a \`docs\` folder that will contain an index html file, src js file and src map file. It is called \`docs\` so that we can push it to Github pages for deployment.

### Pushing your github project

Skip this section if you know how to create a repo on github with your app.

We must first initialize our repo with:

\`\`\`
git init
\`\`\`

To add all your files and commit the changes:

\`\`\`
git add .
git commit -m 'Initial Commit'
\`\`\`

Then add your repo to a remote origin and push to Github:

\`\`\`
git remote add origin https://github.com/{YOUR_GITHUB_ID}/{YOUR_REPO_NAME}.git
git push -u origin master
\`\`\`

Note: Substitute your github id and repo name as appropriate.

### Deploying to github pages

To deploy to github pages, you must configure your repo's settings to publish your app.

To do that,

- Go to \`Settings\` tab in your repo
- Under \`GitHub Pages\` section, select your source as \`master branch/docs folder\`

You will see the page refresh with the following information:

\`\`\`
Your site is ready to be published at
https://{YOUR_GITHUB_ID}.github.io/{YOUR_GITHUB_NAME}/.
\`\`\`

Your app will be deployed at this URL. It can take anywhere between 20 mins to an hour before you can see this published.
`
};
