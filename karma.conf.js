module.exports = function(config) {

	require('gruntfile-convention-webapp/karma.conf.js')(config, function(options) {
		var indexOfSrcJs = options.files.indexOf(process.cwd() + '/src/**/*.js');
		options.files.splice(indexOfSrcJs, 0, process.cwd() + '/src/**/*.tmpl.html');
		var indexOfGitModulesJs = options.files.indexOf(process.cwd() + '/git_modules/*/src/**/*.js');
		options.files.splice(indexOfGitModulesJs, 0, process.cwd() + '/git_modules/*/src/**/*.tmpl.html');
		options.preprocessors = options.preprocessors || {};
		options.preprocessors[process.cwd() + '/git_modules/*/src/**/*.tmpl.html'] = ['ng-html2js'];
		options.preprocessors[process.cwd() + '/src/**/*.tmpl.html'] = ['ng-html2js'];
		options.ngHtml2JsPreprocessor = {
			moduleName: function(htmlPath, originalPath) {
				var relativePath = htmlPath.replace(process.cwd() + '/', '');
				if (relativePath.startsWith('git_modules/')) {
					var git_module = relativePath.split('/')[1];
					return require(process.cwd() + '/git_modules/' + git_module + '/package.json').name + '-templates';
				} else {
					return require(process.cwd() + '/package.json').name + '-templates';
				}
			}
		};
	});

};
