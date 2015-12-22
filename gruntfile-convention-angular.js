module.exports = function(grunt, modifyConfig) {

	require('gruntfile-convention-webapp')(grunt, function extendConfig(config) {
		config.html2js = {
			options: {
				module: '<%= pkg.name %>-templates',
				htmlmin: { removeComments: true, collapseWhitespace: true }
			},
			build: {
				src: [ 'src/**/*.tmpl.html' ],
				dest: 'build/tmpl/templates.js'
			}
		};
		config.ngAnnotate = {
			// Fix angular dependency injection
			build: { files: [ { expand: true, src: [ 'build/js/**/*.js' ] } ] }
		};
		config.watch.tmpl = { files: 'src/**/*.tmpl.html', tasks: [ 'build_tmpl' ] };
		config.uglify.templates = { files: [ { expand: true, cwd: 'build', src: 'tmpl/**/*.js', dest: 'dist' } ] }
		// Override karma configFile
		config.karma.unit.configFile = 'node_modules/gruntfile-convention-angular/karma.conf.js';

		if (modifyConfig) {
			modifyConfig(config);
		}

	});

	// Override build_js
	grunt.task.registerTask('build_js', [ 'jshint', 'copy:js', 'ngAnnotate' ]);

	// Add build_tmpl
	grunt.task.registerTask('build_tmpl', [ 'html2js' ]);

	grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks("grunt-ng-annotate");

};
