/*
 * grunt-jingoal-thumbnail
 * https://github.com/yangsendyx/react-redux-router
 *
 * Copyright (c) 2016 lirongfei123
 * Licensed under the MIT license.
 */

'use strict';
var gm = require('gm');
var os = require('os');
var uPath = require('upath');
var async = require('async');
module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('jingoal_thumbnail', 'The best Grunt plugin ever.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({

        });
        var done = this.async();
        var series = [];
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var srcFilePath = uPath.normalize(process.cwd() + "/" + f.src[0]);
            var destFilePath = uPath.normalize(process.cwd() + "/" + f.dest);
            series.push(function(callback) {
                try {
                  gm(srcFilePath).size(function(err, value) {
                      this.thumb(value.width / 2, value.height / 2, destFilePath, 100, function() {
                        grunt.log.writeln('File "' + f.dest + '" created.');
                        callback();
                      });
                      
                  });
                } catch (ex) {
                  console.error("请确定已经安装了GraphicsMagick，并将其添加到了path里面");
                }
            });
        });
        async.parallelLimit(series, os.cpus().length, done);
    });

};