var fs = require('fs');
var request = require('request');


module.exports = {
  pwd: function(stdin, input, done) {
    done(process.cwd());
  },
  date: function(stdin, input, done) {
    done(new Date().toString());
  },
  ls: function(stdin, input, done) {
    var output = fs.readdirSync('.').toString().split(',').join('\n');
    done(output);
   },
   echo: function(stdin, input, done){
    done(input.join(' '));
   },
   cat: function(stdin, input, done){

    fs.readFile("./"+input, function(err, file){

            done(stdin, file.toString());
    });
   },
   head: function(stdin, input, done){
    if (arguments.callee.caller===done){
       done(stdin, input.toString().split("\n").splice(0,5).join("\n"));
   } else {
     fs.readFile("./"+input, function(err, file){
       done(stdin, file.toString().split("\n").splice(0,5).join("\n"));
     });
   }

   },

   tail: function(stdin, input, done){
    fs.readFile("./"+input, function(err, file){
       done(file.toString().split("\n").splice(-5).join("\n"));
    });
   },
   sort: function(stdin, input, done) {
    fs.readFile('./'+input, function(err, file) {
        done(file.toString().split("\n").sort().join('\n'));
    })
   },
   wc: function(stdin, input, done) {
    fs.readFile('./'+input, function(err, file) {

        done(stdin, file.toString().split("\n").length.toString());
    })
   },
   uniq: function(stdin, input, done) {
    fs.readFile('./'+input, function(err, file) {
        var cleanArr = [];
        var arr = file.toString().split("\n");
        arr.forEach(function(line) {
            if(cleanArr.indexOf(line) === -1) cleanArr.push(line);
        });
        done(cleanArr.join('\n'));
    })

    },
    curl: function(stdin, input, done) {
        request(input, function(error, response, body) {
            if(!error && response.statusCode == 200) {
                done(body)
            }
        })
    }

}
