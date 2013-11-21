'use strict';


var cafeUnEuroBaseUrl = 'http://parisdata.opendatasoft.com/api/records/1.0/search?dataset=liste-des-cafes-a-un-euro';

/* Services */
var services = angular.module('cafeApp');

services.value('version', '0.1');

services.factory('CafeSrv', function ($resource) {
    // cafeUnEuroBaseUrl = '../test/data/liste-des-cafes-a-un-euro.json';
    return  $resource(cafeUnEuroBaseUrl, {}, {
        query: {method: 'GET', isArray: true}, get: {method: 'GET'}
    });
});

services.factory('CafeArdtSrv', function ($resource) {
    var url = cafeUnEuroBaseUrl + '&facet=arrondissement&refine.arrondissement=:ardt';
    return  $resource(url, {/*ardt: '75010'*/}, {
        query: {method: 'GET', isArray: true}, get: {method: 'GET'}
    });
});
