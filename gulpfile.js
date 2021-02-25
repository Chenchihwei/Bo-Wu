//引入套件
var gulp = require('gulp');
var cssminify = require('gulp-minify-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');


const{
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


const fileinclude =require('gulp-file-include');

function includeHTML() {
    return src ('app/*.html')
        .pipe(fileinclude({
            prefix:'@@',      //變數字首
            basepath:'@file'
        }))
        .pipe(dest('dist/'));
}

// 搬檔案

function move(){
    return src('./app/**/*').pipe(dest('./dist'));

}


function moveImg() {
    return src('app/assets/img/**/*').pipe(dest('dist/assets/img/'));
}

function concatJSAndMove() {
    return src('app/assets/js/**/*.js').pipe(concat('all.js')).pipe(dest('dist/assets/js/'));
}

function moveJS() {
    return src('app/assets/js/**/*.js').pipe(dest('dist/assets/js/'));
}

function movePHP() {
    return src('app/assets/php/**/*.php').pipe(dest('dist/assets/php/'));
}

function moveBackendFiles() {
    return src('app/back/**/*.php').pipe(dest('dist/backend'));
}

// 合併檔案

exports.concatfile = function all(){

    return src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(dest('./dist/css/all/'))
}

// 壓縮檔案 minify css

exports.minicss = function minifycss(){
    return src('./dist/css/all/style.css')
    .pipe(cleanCSS())
    .pipe(dest('css/minify'))
}



// 合併並壓縮

exports.mixfunction = function mixfunction(){
    return src('.dist/css/*.css')//來源檔案
    .pipe(concat('style.css'))   //合併
    .pipe(cleanCSS())            //壓縮
    .pipe(dest('css/minify'))   //該層目錄
}


//sass 編譯
//套件引入

var sass = require('gulp-sass');

function sassStyle(){
    return src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error',sass.logError))
    .pipe(sourcemaps.write())  //壓縮CSS
    .pipe(concat('all.css'))
    .pipe(dest('css/'))
}


//轉譯all.scss
function commonStyle() {
    return src('app/assets/style/all.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'expanded', // nested巢狀  // compressed壓縮  //expanded 原本
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        // .pipe(concat('all.css'))
        .pipe(dest('dist/assets/css/'));
}

//轉譯 page scss
function pageStyle() {
    return src('app/assets/style/pages/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'nested',
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(dest('dist/assets/css/pages/'));
}
//刪除 Dist
function killDist() {
    return src('dist',
        {read: false,
        allowEmpty: true})
        .pipe(clean(
        {
            force: true,
            } 
        ));
}

// 刪除  Dist css檔
function killDistCss() {
    return src('dist/**/*', {
        read: false,
        allowEmpty: true
    }).pipe(
        cleanCSS({
            force: true,
        })
    );
}

exports.killCss = killDistCss;
exports.Kill = killDist;
exports.all = series(killDistCss,parallel(commonStyle,pageStyle,includeHTML));

//監聽scss

// exports.w =function watchfile(){
//     watch('sass/*.scss',sassStyle)
// }

exports.w = function watchFiles() {
    watch(['app/assets/style/**/*.scss', '!app/assets/style/pages/*.scss'], commonStyle);
    watch('app/assets/style/pages/*.scss', pageStyle);
    watch('app/**/*.html', includeHTML);
    watch('app/assets/img/**/*', moveImg);
    watch('app/assets/js/**/*.js', moveJS);
    watch('app/assets/php/**/*.php', movePHP);
    watch('app/back/**/*.php', moveBackendFiles);
};
