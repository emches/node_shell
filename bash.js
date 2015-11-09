var command = require('./commands.js');

var done = function(stdin, output) {
   if ( stdin.length ===0) {process.stdout.write(output);
   process.stdout.write('\nprompt > ');
   } else {
    nextFunc = stdin[0]

    stdin = stdin.slice(1);
    command[nextFunc](stdin, output, done);
   }
};

// Output a prompt
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
	var cmd = data.toString().trim().split(" ")[0]; // remove the newline
	var input = data.toString().trim().split(" ").slice(1)[0];
    var stdin = data.toString().trim().split(/\s*\|\s*/g).slice(1)
	command[cmd](stdin, input, done);
});