# An easier way to build with grunt.

With convention over configuration you don't need a large Gruntfile and package.json.

You will get the following for "free":

1. Testing with jasmine and PhantomJS
2. Bower installation and inclusion
3. LESS
4. JSHint
5. HTML validation
6. angular templtes to js
7. ng annotations
8. js minification
9. css minification
10. html minification
11. cache busting

Firstly

    npm install

Run tests

    grunt test

Run http server:

    grunt run

Build distribution

    grunt dist

File structure convention

-  src
  - assets
  - js
  - less
  - templates (angular templates end in .tmpl)
- test
- package.json
- gruntfile.js
- bower.json

