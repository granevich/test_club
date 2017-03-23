/**
 * Created by granevich on 06.05.2016.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),

    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb');
    //     sass        = require('gulp-sass'),//переводит sass в css
    // browserSync = require('browser-sync'),//обновление браузера
    // concat  = require('gulp-concat'),//сборщик всех файлов
    // uglify  = require('gulp-uglifyjs'),//минифицирует скрипты
    // cssnano = require('gulp-cssnano'),//минифицирует css
    // rename = require('gulp-rename'),//переиминовывает файлы
    // del = require('del'),//удаляет файлы и директории
    // imagemin = require('gulp-imagemin'),//минифицирует картинки
    // pngquant = require('imagemin-pngquant'),//минифицирует png
    // cache = require('gulp-cache'),//кеширует файлы
    // autoprefixer = require('gulp-autoprefixer'),//вставляет префиксы
    // uncss = require('gulp-uncss'),//убирает неиспользующие стили
    // csscomb = require('gulp-csscomb');//комбинирует красиво стили
  



gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions',  'ie 8', 'ie 7'],{cascade:true}))
        .pipe(csscomb())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('browserSync', function () {
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    });
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload)
});
