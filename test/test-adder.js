const expect = require('chai').expect;                                  // import chai and declare as the "expect" variable.

const adder = require('../adder');                                      // import adder and delcare as the "adder" variable.

describe('adder', function() {                                          // The test suite for the adder function includes the following tests...
  it('should add two numbers', function() {                             // Testing the normal cases...
    const normalCases = [        
      {a: 2, b: 3, expected: 5},                                          // such as 2 + 3 and the "expected" result is 5 and so on for each item in this array.
      {a: 200, b: 2000, expected: 2200},
      {a: 2, b: -5, expected: -3}
    ];         

    normalCases.forEach(function(input) {                                  // for each set of inputs (a,b), 'adder' should produce the expected results.
      const answer = adder(input.a, input.b);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {              // and for bad inputs (our edge cases) such as those that are not inputs...
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];
    badInputs.forEach(function(input) {                                   // an error is raised for those bas inputs.           
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});