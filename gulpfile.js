var gulp = require('gulp')
, sourcemaps = require('gulp-sourcemaps')
, sass = require('gulp-sass')
, concat = require('gulp-concat')
, Cachebust = require('gulp-cachebust')
, print = require('gulp-print')
, babel = require('gulp-babel')
, uglify = require('gulp-uglify')

var cachebust = new Cachebust();

gulp.task('build-css', function(){
  return gulp.src('./public/css/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/dist'));
})

gulp.task('build-js', function() {
   return gulp.src('public/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      // .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('build', ['build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./public/index.html','./partials/*.html', './public/css/*.*css', './public/js/**/*.js'], ['build']);
});
