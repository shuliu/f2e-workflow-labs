

var mybower = require('bower');

mybower.commands.install(['react'])
  .on('end', function (installed) {
    console.log(installed);
  });