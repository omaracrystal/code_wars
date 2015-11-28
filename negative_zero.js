function isNegativeZero (x) {
    if (typeof(x) == "string") {
      return false;
    }
    if ( x > 0 ) {
        return false;
    }
    if ( x < 0) {
        return false;
    }
    if ( 1 / x === Number.POSITIVE_INFINITY ) {
        return false;
    }
    if (1 / x === Number.NEGATIVE_INFINITY ) {
      return true;
    }
    return false;
}

function isNegativeZero(x) {
  return typeof x === "number" && 1/x === -Infinity;
}

function isNegativeZero(x) {
  return x === 0 && 1 / x < 0;
}

function isNegativeZero(x) {
  if (x === 0 && 1/x === -Infinity) {
    return true;
  }
  return false;
}

module.exports = isNegativeZero;
