module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: [
					{
					expand: true,
					cwd: 'app/styles',
					src: ['*.scss', '!*.css'],
					dest: 'app/styles',
					ext: '.css'
					}
				]
			}
		},
		shell: {
			serve: {
				command: 'serve -p 3000'
			},
			serve_prod: {
				command: 'serve -p 80'
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'app/styles',
					src: ['*.css', '!*.min.css'],
					dest: 'app/styles',
					ext: '.min.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass']
			},
			cssmin: {
				files: ['**/*.css'],
				tasks: ['cssmin']
			}
		},
		concurrent: {
			serve: ['shell:serve', 'watch:sass:dist', 'watch:cssmin'],
			serve_prod: ['shell:serve_prod', 'watch:sass:dist', 'watch:cssmin']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('serve', [
		'sass:dist',
		'cssmin',
		'concurrent:serve'
	]);
};
