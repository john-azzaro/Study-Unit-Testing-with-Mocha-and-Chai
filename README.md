# Unit Testing with Mocha and Chai Study

<br>

## What is Unit Testing with Mocha and Chai Study?
"Unit Testing with Mocha and Chai Study" is an exploration of unit testing using the Mocha framework and Chai assertion library.  

## Mocha in context: What are software test and why use them?
A *software test* is a routine that runs the subject under test (i.e. the testing code) and determines if the code tested conforms to 
expectations.  You want to include tests in all of your projects because it serves as documentation that illustrates the way code *should*
be used and provides a quick way to check if any new features that have been added break your existing code (i.e. regression).

Take for example test below, which tests the "adder.js" file in this study:
```
    $ npm test

    > test-intro@1.0.0 test C:\Users\Admin\Desktop\Study-Unit-Testing-with-Mocha-and-Chai
    > mocha

    adder
        √ should add two numbers
        √ should raise error if args not numbers

    2 passing (5ms)
```
What's interesting about the test above is that even though you dont really know how adder is implemented, you can see from the test that
it should: a) add two numbers and b) raise an error is the arguments are not numbers.

## What is Mocha?
"Mocha" is a testing framework that that provides functions that can be executed according to a specfic order and logs the result in 
the terminal window.  With Mocha, you can use the command line argument "mocha" to look for and execute a test. 

## What are test suites and test cases in Mocha?
Mocha provides structure by using keywords like "describe" and "it", that batch into *test suites* and *test cases*. **Test suites** are a collection
of tests all realating to a single functionality or behavior.  **Test cases** or **unit tests** test the behavior of small, independent units of code, 
which are the smallest chuncks of meaningful, testable code that will either *pass* or *fail*.

## How do you install Mocha and use Mocha?

### STEP 1: Installing Mocha
In your project file (assuming you have already run "npm init"), install mocha to your development environment:
```
    npm install mocha --save-dav
```
Additionally, you want to add the line of code in you package.json file which will allow you to run tests in Gitbash with a single command:
```
    "scripts": {
            "test":"mocha --exit"   
    }
```

<br>

### STEP 2: Create a "test" file
This folder will hold all the test suites we want to run for our project.  
```
    test
```
Important conventions to remember when creating individual test files in your test folder:
* Each file should begin with "test-".
* Use dashes between each word (i.e. test-adding-code).
* The name of the file should be all lowercase.

<br>

### STEP 3: Load the subject under test to your test file
The "subject under test" is simply the code/JavaScript file you want to test in this module.  For example, suppose you want to test
a function whose prupose is to do a strict comparison of two numbers.  Also note that we need to export that module so that it can be used 
```JavaScript
    function isEqual(a, b) {
        return a === b;
    }

    module.exports = isEqual 
```
To load the subject under test, in your test file (e.g. test-isequal) require the file you wish to test.  Also note the ".." in "../isEqual" which
is the root location of the project folder.
```JavaScript
    const isEqual = require('../isEqual');
```

<br>

### STEP 4: Create a test suite with "describe" and "it" for behaviors to test
To create a test suite, use *describe* to group all of your tests together, which take a string and a callback function.  Inside the *describe* test suite, you 
can have one or more *it* test cases, which also has a string value and a callback function with the respective test for the behavior.  Note that within the test suite,
can nest as many test units as you wish.
```JavaScript
     describe('isEqual', function() {
            it('should give right answers for equal and unequal inputs')
        });
```
To test this out, run ```npm test``` (remember, we added a script to our package.json file to run "mocha  --exit" with this line). If you setup your test correctly, you
should see the following below.  Note that the test will show "pending" because a callback function has not been supplied yet.  This is where the chai assertion library comes in.
```
    $ npm test                                                              <== when you run "npm test"...

    > mocha-demo-2@1.0.0 test C:\Users\Admin\Desktop\mocha-demo             <== mocha-demo (i.e. the test folder)...
    > mocha --exit                                                          <== ... runs mocha --exit (i.e. the script for "test")

    isEqual                                                                 <== name of the function being tested...
        - should give right answers for equal and unequal inputs            <== first argument is a string value indicating the behavior to be tested in that block.

    0 passing (9ms)
    1 pending                                                               <== Test is pending because we have not supplied a callback function.

```


<br>


## What is Chai and how do you use in it conjunction with Mocha?
**Chai** is a "test expectation" library that helps you make assertions (thus you can call it an *assertion library* about code behavior in conjunction with Mocha.  It provides functiond and methods that help compre the output of certain tests with the expected valuesyou stipulate in your tests.  Chai is provides extremely clear syntax that will help you in unit testing as well.

<br>

### STEP 5: Install the chai dependency
Same process as sintalling the Mocha dependency in your package.json file, simply install the library using npm.
```
    npm install chai --save-dev
```

<br>

### STEP 6: Require chai in your test file
With chai, we want to require chai so that we can utilize it in our test file.
```JavaScript
    const isEqual = require('../isEqual');
    const expect = require('chai');                  // load chai

    describe('isEqual', function() {
        it('should give right answers for equal and unequal inputs')
    });
```

<br>

### STEP 7: Use "expect" to test the code inside your unit tests
In each test suite (i.e. describe), inside each unit test (i.e. it), and inside the callback function you add to *it* unit tests, you can use chai test the code for your unit test. In the example below, we want to test whether or not 1 and 1 are equal (rememeber, our subject to test is a function that takes 2 arguments that are compared via strict equality). Then, we simply chain together the *getters* to create and execute the assertion.

In the example below, we are testing "isEqual" with two test numbers, 2 and 2, which should be true.  In other words, we are testing whether or 
not the answer generated by the subject under test conforms to expectations.
```JavaScript
    const isEqual = require('../isEqual');
    const expect = require('chai');                  

    describe('isEqual', function() {
        it('should give right answers for equal and unequal inputs', function() {
            expect(isEqual(2,2).to.be.true)
        });
    });
```

<br>

### STEP 8: Run your test!
And finally when you run your test with ```npm test``` you will see some functional results.  In the case of this study, there will one of two results.
If the test conforms to expectations (i.e. 1 === 1 is *true*), then the test will pass. If the test does NOT conform to expectations, then the test will fail.
```
    $ npm test

    > mocha-chai@1.0.0 test C:\Users\Admin\Desktop\mocha-chai
    > mocha --exit

    isEqual
        √ should give right answers for equal and unequal inputs

    1 passing (10ms)
```
