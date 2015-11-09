var fs = require('fs');
module.exports = {
  pwd: function(input) {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');

  },
  date: function(input) {
   process.stdout.write(new Date().toString());
   process.stdout.write('\nprompt > ');

  },
  ls: function(input) {

    var files = fs.readdirSync('.');
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
     });
    process.stdout.write('\nprompt > ');

   },
   echo: function(input){
    process.stdout.write(input.join(" "));
    process.stdout.write('\nprompt > ');

   },
   cat: function(input){
    fs.readFile("./"+input, function(err, file){
       process.stdout.write(file.toString());
       process.stdout.write('\nprompt > ');

    });
   },
   head: function(input){
    fs.readFile("./"+input, function(err, file){
       process.stdout.write(file.toString().split("\n").splice(0,5).join("\n"));
       process.stdout.write('\nprompt > ');

    });
   },

   tail: function(input){
    fs.readFile("./"+input, function(err, file){
       process.stdout.write(file.toString().split("\n").splice(-5).join("\n"));
       process.stdout.write('\nprompt > ');

    });

   }

}
