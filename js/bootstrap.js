/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    console.log("Bootstrap.js file is loading ");


    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
