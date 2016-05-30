(function() {
	'use strict';

	angular.module('reflexive').directive('reflexiveNavbar', reflexiveNavbar);

	/** @ngInject */
	function reflexiveNavbar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html',
			scope: {
				creationDate: '='
			},
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function NavbarController(moment) {
			var vm = this;
			// "vm.creationDate" is available by directive option "bindToController: true"
			vm.relativeDate = moment(vm.creationDate).fromNow();
		}
	}

})();
