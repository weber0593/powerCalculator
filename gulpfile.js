var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps');

var styleSource = './public/sass/style.scss';
var outputDir = './public/stylesheets';

gulp.task('sass', function () {
  return gulp.src(styleSource)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
     }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
	  .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputDir))
});

gulp.task('watch', function(){
    gulp.watch(styleSource, ['sass']);
});

gulp.task('default',['sass', 'watch']);
