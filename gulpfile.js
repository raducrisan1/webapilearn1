var gulp = require('gulp');
var gulMocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');
var supertest = require('supertest');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function () {
            console.log('restarting');
        });
});

gulp.task('test', function() {
   env({vars: {ENV: 'Test'}});
   gulp.src('tests/*.js', {read: false})
       .pipe(gulMocha({reporter: 'nyan'}))
});