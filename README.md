# Create React Parcel (CRP) App

> by [Ashwanth A R](https://github.com/ashwanth1109)

Note: Also, has support for deploying your site to github pages.

Inspired by the `nano-react-app` project by Adrian Li

### Booting Up

After you have run `npx create-react-parcel my-app`, cd into your directory:

```
cd my-app
```

You should have a `src` directory, `.gitignore`, `package.json`, and `README.md` files.

To get started, you must first install npm dependencies (babel, parcel, and react). Run the following command in your terminal:

```
npm install
```

This will create the `node_modules` folder for you.

### Running the project

You can have parcel bundle up your app into a `dist` folder and run it on a server for you. Simply run,

```
npm start
```

You can now view your project at `http://localhost:1234`

Additionally parcel will create a `.cache` folder.

> Parcel compiles all of your files in isolation in parallel inside workers, caching all of them as it goes along. - from the [Official Docs](https://github.com/parcel-bundler/parcel#introduction)

### Building the project

Before you can deploy your project to Github pages, you must first build your project. To build, run:

```
npm run build
```

This will generate a `docs` folder that will contain an index html file, src js file and src map file. It is called `docs` so that we can push it to Github pages for deployment.

### Pushing your github project

Skip this section if you know how to create a repo on github with your app.

We must first initialize our repo with:

```
git init
```

To add all your files and commit the changes:

```
git add .
git commit -m 'Initial Commit'
```

Then add your repo to a remote origin and push to Github:

```
git remote add origin https://github.com/${YOUR_GITHUB_ID}/${YOUR_REPO_NAME}.git
git push -u origin master
```

Note: Substitute your github id and repo name as appropriate.

### Deploying to github pages

To deploy to github pages, you must configure your repo's settings to publish your app.

To do that,

- Go to `Settings` tab in your repo
- Under `GitHub Pages` section, select your source as `master branch/docs folder`

You will see the page refresh with the following information:

```
Your site is ready to be published at
https://${YOUR_GITHUB_ID}.github.io/${YOUR_GITHUB_NAME}/.
```

Your app will be deployed at this URL. It can take anywhere between 20 mins to an hour before you can see this published.
