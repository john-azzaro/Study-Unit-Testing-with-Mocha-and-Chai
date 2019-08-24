# Unit Testing with Mocha and Chai Study

<br>

## What is Unit Testing with Mocha and Chai Study?
"Unit Testing with Mocha and Chai Study" is an exploration of unit testing using the Mocha framework and Chai assertion library.  

## Mocha in context: What are software and unit tests?
A *software test* is a routine that runs the subject under test (i.e. the testing code) and determines if the code tested conforms to 
expectations.  You want to include tests in all of your projects because it servers as documentation that illustrates the way code should
be used and provides a quick way to check if any new features that have been added break your existing code (i.e. regression). A *unit test* 
tests the behavior of small, independent units of code, which are the smallest chuncks of meaningful, testable code.

## What is Mocha?
"Mocha" is a testing framework that that provides functions that can be executed according to a specfic order and logs the result in 
the terminal window.  With Mocha, you can use the command line argument "mocha" to look for and execute a test. 

## What are test suites and test cases in Mocha?
Mocha provides structure by using keywords like "describe" and "it", that batch into *test suites* and *test cases*. **Test suites** are a collection
of tests all realating to a single functionality or behavior.  **Test cases** is a singular description about the desired behavior of a peice of code
that will either *pass* or *fail*.

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
should see the following:
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



