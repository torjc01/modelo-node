/*************Test******************/
var test = require('unit.js');
var str = 'Hello, world!';

console.log("Test procedure")
test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/