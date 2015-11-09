// Output a prompt
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline
  console.log(cmd);
  switch (cmd){

   case "pwd": process.stdout.write(process.cwd());
   break;

   case "date":
   process.stdout.write(new Date().toString());
   break;


  }

  process.stdout.write('\nprompt > ');

});