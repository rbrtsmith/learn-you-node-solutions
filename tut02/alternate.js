var args = process.argv.slice(2);
console.log(args.reduce(function(prevVal, currVal) {
    return +prevVal + +currVal;
}));
