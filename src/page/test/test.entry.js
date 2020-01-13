require('./test.scss')
require('./test2.css')

import {name} from './sub';

console.log(name)

console.log('loaded!!!!!')


let s = require('./test.html');


document.body.innerHTML = s;
console.log(111)