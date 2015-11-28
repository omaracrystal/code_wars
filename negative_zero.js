(function(){
  'use strict';

    function isNegativeZero (number) {
      if ( number > 0 ) {
          return false;
      }
      if (number < 0) {
          return true;
      }
      if ( 1 / number === Number.POSITIVE_INFINITY ) {
          return false;
      }
      return true;
  }

module.exports = isNegativeZero;

})();
