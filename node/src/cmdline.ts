import argv from '@tslib/argv';
// Automatically import version information, it can also be manually defined
import pkg = require('../package.json');
import debug from 'debug';
import path from 'path';
const _d = debug('app:' + path.basename(__filename, '.js'));

_d('load cmdline');

/**
 * Export the parsed command line
 */
export default argv(
  pkg.name,
  pkg.version,
  `node service demo project
  using: "${pkg.name} -p port "
  `,
  {
    cmd: {
      short: null, // ​​Define short is null, set cmd to command parameter parsing mode
      desc: 'default cmd is "run",other:"test","build"',
      value: 'run', // default value
    },
    port: {
      short: 'p',
      desc: 'service listen port,default:3000',
      value: 3000, // default value
    },
    boo: {
      short: 'b',
      desc: 'service listen port,default:3000',
      value: true, // default value
    }
  }
);