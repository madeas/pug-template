# Pug template for Visual Studio Code (VSCode)

Setup and connection of pug for work in VSCode

[![Documentation is at pugjs.org](/src/docs.svg)](https://pugjs.org/api/getting-started.html)
[![GitHub Repo](/src/github.svg)](https://github.com/pugjs/pug)
[![Download NPM](/src/npm.svg)](https://www.npmjs.com/package/gulp-pug)

## Releases

### v1.0

+ Simple template without importing attachments and additional pages

### v2.0

+ Template using content import from subfolders

### v3.0

+ Template using Inheritance: Extends and Block
+ Final connection of styles and scripts for work

## VSCode Plugins

+ Live Sass Compiler
+ Live Server

## Settings live Sass Compiler

1. CTRL+SHIFT+/
2. Search: liveSassCompile.settings.formats
3. Check: `settings.json`
4. Add:

```json
"liveSassCompile.settings.formats": [{
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "/build/css/"
    }],
```

## NPM Sources

+ npm i -D gulp
+ npm i -D gulp-cli
+ npm i -D gulp-pug

CSS rename, merge media queries & minify

+ npm i -D gulp-rename
+ npm i -D gulp-sourcemaps
+ npm i -D gulp-concat
+ npm i -D gulp-merge-media-queries
+ npm i -D gulp-clean-css

add tasks for JavaScript

+ npm i -D gulp-babel @babel/core @babel/preset-env
+ npm i -D gulp-uglify

Other tasks

+ npm i -D gulp-watch
+ npm i -D gulp-imagemin

## Gulpfile

gulp -v `4.0.2`  
gulp cli -v `2.2.0`

+ gulp = require('gulp'),
+ pug = require('gulp-pug'),

+ sourcemaps = require('gulp-sourcemaps'),
+ cleanCSS = require('gulp-clean-css'),
+ mmq = require('gulp-merge-media-queries'),
+ rename = require('gulp-rename'),
+ babel = require('gulp-babel'),
+ concat = require('gulp-concat'),
+ uglify = require('gulp-uglify'),

+ watch = require('gulp-watch'),
+ imagemin = require('gulp-imagemin'),
