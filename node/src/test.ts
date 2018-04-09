import debug from 'debug';
import path from 'path';
const _d = debug('app:' + path.basename(__filename, '.js'));

_d('test module');

export default { abc: 999 };