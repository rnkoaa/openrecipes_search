search-recipes
==============

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.14.0.

Build & development
-------------------

Run `grunt` for building and `grunt serve` for preview.

Testing
-------

Running `grunt test` will run the unit tests with karma.

This project is a learning experience on how to build an angular app and connect it to elasticsearch to do basic searching.

This is a full implementation with no additional addons from the code located at this [sitepoint blog post](http://www.sitepoint.com/building-recipe-search-site-angular-elasticsearch/)

How to Run this. Install vagrant and virtualbox Install node, npm, yo, and grunt, bower

1.	Go to [Open Recipes](http://openrecip.es/) and download a copy of their database
2.	vagrant up.
3.	npm install
4.	node load_recipes.js
5.	bower install
6.	grunt serve

BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(); String existingPassword = ... // Password entered by user String dbPassword = ... // Load hashed DB password

if (passwordEncoder.matches(existingPassword, dbPassword)) { // Encode new password and store it } else { // Report error }
