/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('connect', function() {
  connect.server({
    port: 20176,
    livereload: true
  })
})

gulp.task('default', ['connect'])
