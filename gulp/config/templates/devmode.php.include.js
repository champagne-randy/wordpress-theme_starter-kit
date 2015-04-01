module.exports = function (filename, templateDef) {
	templateDef = templateDef || '';
	
	return [
		'<?php',
		'/**',
		' * ' + templateDef,
		' *',
		' * DEVELOPMENT MODE ONLY',
		' *',
		' * Includes and Runs php files directly',
		' * from the dev theme to enable debugging',
		' * php from within the dev theme!',
		' *',
		' * Run "gulp build" to generate the theme',
		' * for production before deploying!',
		' *',
		' */',
		'include_once \'' + filename + '\';'
	].join('\n');
};
