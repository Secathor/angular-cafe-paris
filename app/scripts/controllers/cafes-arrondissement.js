'use strict';

/* Controllers */

angular.module('cafeApp').
    controller('CafesArrondissementCtrl', function CafesArrondissementCtrl($scope, CafeArdtSrv) {
        // list of arrondissement
        $scope.ardts = [
            {cp: '75001', label: 'I'},
            {cp: '75002', label: 'II'},
            {cp: '75003', label: 'III'},
            {cp: '75004', label: 'IV'},
            {cp: '75005', label: 'V'},
            {cp: '75006', label: 'VI'},
            {cp: '75007', label: 'VII'},
            {cp: '75008', label: 'VIII'},
            {cp: '75009', label: 'IX'},
            {cp: '75010', label: 'X'},
            {cp: '75011', label: 'XI'},
            {cp: '75012', label: 'XII'},
            {cp: '75013', label: 'XIII'},
            {cp: '75014', label: 'XIV'},
            {cp: '75015', label: 'XV'},
            {cp: '75016', label: 'XVI'},
            {cp: '75017', label: 'XVII'},
            {cp: '75018', label: 'XVIII'},
            {cp: '75019', label: 'XIX'},
            {cp: '75020', label: 'XX'}
        ];

        // because ngRepeat create a new scope
        // http://stackoverflow.com/questions/16443873/angular-ui-bootstraps-radio-buttons-act-strange-with-ng-repeat
        $scope.cafeSearch = {ardt:''};

        // init cafes list ngRepeat
        $scope.cafeFilterNom = '';
        $scope.cafeSort = 'fields.nom';

        // search cafes by arrondissement
        $scope.searchCafesInArdt = function (ardt) {
            if (ardt !== null) {
                $scope.cafeFilterArdt = ardt;
            }
            if ($scope.cafeFilterArdt.length === 0) {
                $scope.cafes = null;
            } else {
               $scope.cafes = CafeArdtSrv.get({ardt: $scope.cafeFilterArdt});
            }
        }
    });
