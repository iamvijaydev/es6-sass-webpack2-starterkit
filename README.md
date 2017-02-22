# ES6 SASS Webpack 2 starter kit

This is a barebone minimalistic starter kit for kicking off an ES6, SASS, Webpack 2 project.

## Usage

### Prerequisite
Make sure you have `node` and `npm` installed. This project uses [yarn-pkg](https://yarnpkg.com/en/). If don't have `yarn` yet, you can install it as:
```shell
$ npm install yarn -g
```

### Preparations
* Clone this repo `git clone git@github.com:iamvijaydev/es6-sass-webpack2-starterkit.git`
* You can also [download](https://github.com/iamvijaydev/es6-sass-webpack2-starterkit/archive/master.zip) the repo, without git initialization
* Rename the folder `es6-sass-webpack2-starterkit` to a desired one
* Update `package.json` - name, version, description, author, repository and keywords to your requirement

### Install packages
Now run `yarn install` to install all the dev-dependency packages.

### Start server
Now run `npm start` to start the dev server. Open [localhost:3000](http://localhost:3000/) in browser to view the output.

### Start coding
* Entry for webpack is in `src/scripts/index.js`. Unless you are sure what you are doing you should not **move** or **rename** this file. You sure can edit it.
* Entry for SCSS file is `src/scss/styles.scss` and is added as first line in `src/scripts/index.js`. Unless you are sure what you are doing wou should not edit this.
* Apart from the above settings you can develop the app's file and folders as you like.
* As you make edit the code, the changes are updated in browser without reloading.

### Build for production
Run `npm run build` to generate the files in build folder

## FAQ
**Q:** Where is `build/` folder and where are the build files.

**A:** While you are developing with `npm start`, the webpack-dev-server won't write any files to disk. It will be serving the build files from memory.

**Q:** I don't want Hot Module Reloading

**A:** Please remove `hot` and `inline` from `devServer` object in `webpack.config.js` file ([code](https://github.com/iamvijaydev/es6-sass-webpack2-starterkit/blob/master/webpack.config.js#L57-L58)). Additionally also remove the plugin `new webpack.HotModuleReplacementPlugin()` from `plugins` array ([code](https://github.com/iamvijaydev/es6-sass-webpack2-starterkit/blob/master/webpack.config.js#L74)).

**Q:** How to disable `historyApiFallback`

**A:** Please remove `historyApiFallback` from `devServer` object in `webpack.config.js` file ([code](https://github.com/iamvijaydev/es6-sass-webpack2-starterkit/blob/master/webpack.config.js#L61)).
