module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        modernizr: {
            dist: {
                'devFile' : 'remote',
                'outputFile' : 'js/modernizr.min.js',
                'options' : [
                    'setClasses',
                    'addTest',
                    'html5printshiv',
                    'testProp',
                    'fnBind'
                ],
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
                'customTests' : [],
                'files' : {
                    'src': [
                        '{js,scss}/**/*.{js,css,scss}'
                    ]
                }
            }
        },

        sass: {
            dev: {
                options:{
                    outputStyle:'expanded',
                    sourceMap: true
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
                    sourceMap: false
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
                    require('autoprefixer')({
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
                src: 'css/*.min.css'
            }
        },

        uglify: {
            dev: {
                sourceMap: true,
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'js',
                    ext: '.min.js'
                }]
            },
            dist: {
                sourceMap: false,
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'js',
                    ext: '.min.js'
                }]
            }
        },

        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['**/*.html', '**/*.php']
            },
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev', 'postcss:dev']
            },
            js: {
                files: 'js/**/*.js',
                tasks: ['uglify:dev']
            }
        }
    });

    grunt.registerTask('default',['sass:dev','postcss:dev','watch']);
    grunt.registerTask('build',['sass:dist','postcss:dist','uglify:dist','modernizr:dist']);
};
