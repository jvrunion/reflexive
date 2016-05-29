(function() {
  'use strict';

  angular
    .module('reflexive')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
