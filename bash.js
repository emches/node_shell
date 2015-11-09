var command = require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
   var cmd = data.toString().trim().split(" ")[0]; // remove the newline

   var args = data.toString().trim().split(" ").slice(1)

      command[cmd](args);
      process.stdout.write('\nprompt > ');


});