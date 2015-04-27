'use strict';

var StyleGuide = require('style-guide');

module.exports = function(grunt) {

    grunt.registerMultiTask('style-guide', '', function () {
        var done = this.async();
        var styleGuide = new StyleGuide(this.data);
        styleGuide.save(this.data.dest);
        done();
    });
};