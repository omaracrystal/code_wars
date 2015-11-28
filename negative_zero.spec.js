var isNegativeZero = require('./negative_zero.js');

describe ('isNegativeZero', function () {
  it ("should return false for non-zero numbers", function()
  {
    expect(isNegativeZero(1)).toEqual(false);
    expect(isNegativeZero(-1)).toEqual(false);
    expect(isNegativeZero(NaN)).toEqual(false);
  });

  it ("should return false for strings", function()
  {
    expect(isNegativeZero("car")).toEqual(false);
    expect(isNegativeZero('')).toEqual(false);
    expect(isNegativeZero("-0")).toEqual(false);
  });
  it ("should return false for non-numbers", function()
  {
    expect(isNegativeZero(null)).toEqual(false);
    expect(isNegativeZero(undefined)).toEqual(false);
    expect(isNegativeZero({})).toEqual(false);
  });
  it ("should return false for 0", function ()
  {
    expect(isNegativeZero(0)).toEqual(false);
  });
  it ("should return true for -0", function ()
  {
    expect(isNegativeZero(-0)).toEqual(true);
  });
});


//JUnit Tests
// describe 'isNegativeZero', ->
//   it "should return false for non-zero numbers", ->
//     Test.assertEquals isNegativeZero(1), false, "1 is not -0"
//     Test.assertEquals isNegativeZero(-1), false, "-1 is not -0"
//     Test.assertEquals isNegativeZero(NaN), false, "NaN is not -0"

//   it "should return false for strings", ->
//     Test.assertEquals isNegativeZero("car"), false, "car is not -0"
//     Test.assertEquals isNegativeZero(''), false, "empty string is not -0"
//     Test.assertEquals isNegativeZero("-0"), false, "the string '-0' is not -0"

//   it "should return false for non-numbers", ->
//     Test.assertEquals isNegativeZero(null), false, "null is not -0"
//     Test.assertEquals isNegativeZero(undefined), false, "undefined is not -0"
//     Test.assertEquals isNegativeZero({}), false, "empty object is not -0"

//   it "should return false for 0", ->
//     Test.assertEquals isNegativeZero(0), false, "0 is not -0"

//   it "should return true for -0", ->
//     Test.assertEquals isNegativeZero(-0), true, "-0 is -0"
