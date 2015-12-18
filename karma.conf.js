module.exports = function(config) {

    require('gruntfile-convention-webapp/karma.conf.js')(config, function(options) {
        var indexOfSrcJs = options.files.indexOf(process.cwd() + '/src/**/*.js');
        options.files.splice(indexOfSrcJs, 0, process.cwd() + '/src/**/*.tmpl.html');
        options.preprocessors = options.preprocessors || {};
        options.preprocessors[process.cwd() + '/src/**/*.tmpl.html'] = ['ng-html2js'];
        options.ngHtml2JsPreprocessor = {
            moduleName: require(process.cwd() + '/package.json').name + '-templates'
        }
    });

};
