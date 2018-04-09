import _ from 'lodash';
import express from 'express';
import cmdline from './cmdline';
import process from 'process';
import test from './test';

import debug from 'debug';
import path from 'path';
const _d = debug('app:' + path.basename(__filename, '.js'));

_d(process.argv, test);

var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world\n')
})

const abc = 10;
_d('Hello:', _.snakeCase(`TestMagicMind:${abc}`));
_d('cmdline', cmdline);


app.listen(cmdline.port, () => {
  _d(`listen on ${cmdline.port} ok`);
});