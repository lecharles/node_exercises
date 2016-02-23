console.log(process.argv);
var processArgv = process.argv;
var sum = 0;
for ( var i = 2; i < processArgv.length; i++) {
  sum += Number(processArgv[i]);
}
console.log(sum);
