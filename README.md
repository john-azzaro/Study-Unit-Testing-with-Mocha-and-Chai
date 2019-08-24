# Unit Testing with Mocha and Chai Study

<br>

## What is Unit Testing with Mocha and Chai Study?
"Unit Testing with Mocha and Chai Study" is an exploration of unit testing using the Mocha framework and Chai assertion library.  

## What are software and unit tests?
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

## How do you install Mocha?
In your project file (assuming you have already run npm init), install mocha to your development environment
```
npm install moch --save-dav
```
Additionally, you want to add the line of code below with will allow you to run tests in Gitbash with a single command:
```
    "scripts": {
            "test":"mocha --exit"   
        }
```


