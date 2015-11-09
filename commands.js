module.exports = {
  pwd: function() {
    process.stdout.write(process.cwd());
  },
  date: function() {
   process.stdout.write(new Date().toString());
  }
}