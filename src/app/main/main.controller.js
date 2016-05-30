(function() {
	'use strict';

	angular.module('reflexive').controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, webDevTec, toastr, $log, $mdSidenav) {
		var vm = this;

		vm.awesomeThings = [];
		vm.classAnimation = '';
		vm.creationDate = 1464495008972;
		vm.showToastr = showToastr;

		activate();

		function activate() {
			getWebDevTec();
			$timeout(function() {
				vm.classAnimation = 'rubberBand';
			}, 4000);
		}

		function showToastr() {
			toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
			vm.classAnimation = '';
		}

		function getWebDevTec() {
			vm.awesomeThings = webDevTec.getTec();

			angular.forEach(vm.awesomeThings, function(awesomeThing) {
				awesomeThing.rank = Math.random();
			});
		}

		vm.toggleRight = buildToggler('right');
		vm.toggleLeft = buildToggler('left');

		vm.isOpenRight = function() {
			return $mdSidenav('right').isOpen();
		};
		vm.isOpenLeft = function() {
			return $mdSidenav('left').isOpen();
		};

		/**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */

		function buildToggler(navID) {
			return function() {
				// Component lookup should always be available since we are not using `ng-if`
				$mdSidenav(navID).toggle().then(function() {
					$log.debug("toggle " + navID + " is done");
				});
			}
		}
		vm.closeRight = function() {
			// Component lookup should always be available since we are not using `ng-if`
			$mdSidenav('right').close().then(function() {
				$log.debug("close RIGHT is done");
			});
		};
		vm.closeLeft = function() {
			// Component lookup should always be available since we are not using `ng-if`
			$mdSidenav('left').close().then(function() {
				$log.debug("close LEFT is done");
			});
		};
	}

})();
