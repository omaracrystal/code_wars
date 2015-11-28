var words = require('./negative_zero.js');

describe('isNegativeZero', function() {

  it('0 is not -0', function() {
    expect(isNegativeZero(0)).toEqual(false);
  });
  it('-0 is -0', function() {
    expect(isNegativeZero(-0)).toEqual(true);
  });


//JUnit Tests
// Test.assertEquals(isNegativeZero(0), false, "0 is not -0");
// Test.assertEquals(isNegativeZero(-0), true, "-0 is -0");
