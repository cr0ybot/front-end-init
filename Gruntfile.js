module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {}
        },

        modernizr: {
            dist: {
                'devFile' : 'remote',
                'outputFile' : 'lib/js/modernizr.js',
                'extra' : {
                    'shiv' : true,
                    'printshiv' : false,
                    'load' : true,
                    'mq' : false,
                    'cssclasses' : true
                },
                'extensibility' : {
                    'addtest' : false,
                    'prefixed' : false,
                    'teststyles' : false,
                    'testprops' : false,
                    'testallprops' : false,
                    'hasevents' : false,
                    'prefixes' : false,
                    'domprefixes' : false,
                    'cssclassprefix': ''
                },
                'uglify' : true,
                'tests' : [],
                'parseFiles' : true,
                'matchCommunityTests' : false,
                'customTests' : []
            }
        },

        sass: {
            dev: {
                options:{
                    outputStyle:'expanded',
                    sourceMap: 'auto'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
                },
                dist: {
                options: {
                    outputStyle:'compressed',
                    sourceMap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        postcss: {
            options: {
                remove: false,
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['> 1%', 'last 2 versions']
                    })
                ]
            },
            dev: {
                options: {
                    map: true
                },
                src: 'css/*.css'
            },
            dist: {
                options: {
                    map: false
                },
                src: 'css/*.css'
            }
        },

        watch: {
            options: {
                //livereload: true
            },
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev', 'postcss:dev']
            }
        }
    });

    grunt.registerTask('default',['sass:dev','watch']);
    grunt.registerTask('build',['bower:install','sass:dist','postcss:dist','modernizr:dist']);
};
