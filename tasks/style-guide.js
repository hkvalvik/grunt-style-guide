'use strict';

var StyleGuide = require('styleguide');

module.exports = function(grunt) {

    grunt.registerMultiTask('style-guide', '', function () {
        var done = this.async();
        var styleGuide = new StyleGuide(this.data.src);
        styleGuide.saveJson(this.data.dest);
        setTimeout(function () {
            done();
        }, 3000)
    });
}