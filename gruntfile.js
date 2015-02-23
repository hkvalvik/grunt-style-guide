module.exports = function(grunt) {
    grunt.initConfig({

        'style-guide': {
            dist: {
                src: 'tests',
                dest: 'tests/design.json'
            }
        }
    });

    grunt.loadTasks('tasks');
}
