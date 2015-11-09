var fs = require('fs');
var request = require('request'); 


module.exports = {
  pwd: function(input, done) {
    done(process.cwd()); 
  },
  date: function(input, done) {
    done(new Date().toString());
  },
  ls: function(input, done) {
    var output = fs.readdirSync('.').toString().split(',').join('\n');
    done(output);
   },
   echo: function(input, done){
    done(input.join(' '));
   },
   cat: function(input, done){
    fs.readFile("./"+input, function(err, file){
        done(file.toString());
    });
   },
   head: function(input, done){
    fs.readFile("./"+input, function(err, file){
       done(file.toString().split("\n").splice(0,5).join("\n"));
    });
   },

   tail: function(input, done){
    fs.readFile("./"+input, function(err, file){
       done(file.toString().split("\n").splice(-5).join("\n"));
    });
   },
   sort: function(input, done) {
    fs.readFile('./'+input, function(err, file) {
        done(file.toString().split("\n").sort().join('\n'));
    })
   },
   wc: function(input, done) {
    fs.readFile('./'+input, function(err, file) {
        var arr = file.toString().split("\n").length;
        // console.log(typeof arr === 'object');  
        // console.log(arr); 
        process.stdout.write(arr);
        // process.stdout.write(arr.length);
        process.stdout.write('\nprompt > ');        
        done(output);
    })
   },
   uniq: function(input, done) {
    fs.readFile('./'+input, function(err, file) {
        var cleanArr = []; 
        var arr = file.toString().split("\n"); 
        arr.forEach(function(line) {
            if(cleanArr.indexOf(line) === -1) cleanArr.push(line); 
        }); 
        done(cleanArr.join('\n'));
    }) 
        
    },
    curl: function(input, done) {
        request(input[0], function(error, response, body) {
            if(!error && response.statusCode == 200) {
                done(body)
            }
        })
    }

}
