import _ from 'lodash';
import express from 'express';
import cmdline from './cmdline';
import process from 'process';
import test from './test';

console.log(process.argv,test);

var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world\n')
})

const abc = 10;
console.log('Hello:',_.snakeCase(`TestMagicMind:${abc}`));
console.log('cmdline',cmdline);


app.listen(cmdline.port,()=>{
    console.log(`listen on ${cmdline.port} ok`);    
});