var fs = require('fs');
var src = fs.readFileSync(process.argv[2], 'utf8');

src = '/* Sag-JS v' + process.argv[3] + ' saggingcouch.com\n'
      + 'Licensed under Apache 2.0 */\n' + src;

fs.writeFileSync(process.argv[2], src, 'utf8');
