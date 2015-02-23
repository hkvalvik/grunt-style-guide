module.exports = function(grunt) {
    grunt.initConfig({

        'style-guide': {
            dist: {
                src: 'examples/basic/design',
                dest: 'examples/basic/design.json'
            }
        }
    });

    grunt.loadNpmTasks('grunt-style-guide');
}
