const chai = require('chai');                                                   // import chai and declare as the chai variable.

const fizzBuzzer = require('../fizzBuzzer');                                    // import fizbuzzer and declare as the fizzBuzzer variable.

describe('fizzBuzzer', function() {                                             // For the test suite that tests "fizzBuzzer"
      
   it('should return "fizzbuzz" for multiples of 15', function() {              // to test multiples of 15...        
      [15, 30, 45].forEach(function(input) {                                    // for 15, 30, and 45 in the loop...     
         expect(fizzBuzzer(input).to.equal('fizz-buzz'));                       // expect the input of fizzbuzzer to be equal to 'fizz-buzz'
      });
   });

   it('should return "fizz" for multiples of 3', function() {
      [3, 6, 9, 12].forEach(function(input) {
         expect(fizzBuzzer(input)).to.equal('fizz');
      });
   });

   it('should return "buzz" for multiples of 5', function() {
      [5, 10, 20].forEach(function(input) {
         expect(fizzBuzzer(input)).to.equal('buzz');
      });
   });

   it('should return number if not mult of 3 or 5', function() {
      [1, 2, 4, 7].forEach(function(input) {
         expect(fizzBuzzer(input)).to.equal(input);
      });
   });

   it("should produce error if input isn't number", function() {                 // and to test edge cases...
      const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
      badInputs.forEach(function(input) {
         expect(function() {
            fizzBuzzer(input);
         }).to.throw(Error);
      });
   });
});
