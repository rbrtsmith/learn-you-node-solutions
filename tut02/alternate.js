var args = process.argv.slice(2);
console.log(args.reduce(function(prevVal, currVal) {
    return +prevVal + +currVal;
}));

/*
#1: Remove first two elements of array returned from process.argv and store it in args variable
#2: console.log returned value from the reduce function that is called on the args array.
-> Reduce function when called on an array reduces it to a single value based on the callback function that passes over
  each element.  Here we use it to get the total value of the stored numbers
#3 the + before the value coerces the string into a number.  shorthand for: parseInt(num, 10);

*/
