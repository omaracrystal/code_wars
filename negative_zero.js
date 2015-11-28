function isNegativeZero (number) {
    if (typeof(number) == "string") {
      return false;
    }
    if ( number > 0 ) {
        return false;
    }
    if (number < 0) {
        return false;
    }
    if ( 1 / number === Number.POSITIVE_INFINITY ) {
        return false;
    }
    if (1 / number === Number.NEGATIVE_INFINITY ) {
      return true;
    }
    return false;
}

module.exports = isNegativeZero;
