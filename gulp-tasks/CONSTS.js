'use strict';

const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json'));
const DEFAULT_PORT = 9000;
const LIVERELOAD = 35679;
const HUNDRED = 100;
const RANDOM_PORT = LIVERELOAD + parseInt(Math.random() * HUNDRED); // Randomize port for livereload.
const DIST = 'dist';
const version = packageJson.version;
const name = packageJson.name;
const STATIC_ASSETS = `${DIST}/${version}`;

const OPTIONS = {
    BROWSER_CONFIG: ['> 1%', 'IE 11'],
    BUILD_DIST: 'zip/',
    BUILD_DEST: 'dist/',
    CSS_DEST_PATH: `${STATIC_ASSETS}/css`,
    CSS_SRC_PATH: 'src/sass',
    DATA_SRC: 'src/data',
    DEPLOY_DEST: `deploy/${name}-${version}`,
    DIST_DEST: `${DIST}/`,
    FONT_SRC: 'src/fonts',
    GULP_PORT: process.env.GULP_PORT || DEFAULT_PORT,
    GULP_TASKS: 'gulp-tasks',
    GULPFILE: 'gulpfile.js',
    I18N: 'src/i18n',
    IMG_DEST: `${STATIC_ASSETS}/images`,
    IMG_SRC: 'src/images',
    JS_DEST: `${STATIC_ASSETS}/js`,
    JS_OUTPUT: '.min.js',
    JS_SRC: 'src/js/',
    LIVERELOAD_PORT: process.env.LIVERELOAD_PORT || RANDOM_PORT,
    NODE_ENV: process.env.NODE_ENV,
    SRC: 'src',
    STATIC_PATH: `${STATIC_ASSETS}/`,
    TEMPLATES_DEST:`${DIST}/`,
    TEMPLATES_SRC:'src/templates/',
    TESTS_PATH: 'src/tests/'
};

module.exports = OPTIONS;
