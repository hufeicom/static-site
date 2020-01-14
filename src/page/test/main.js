require('./test.scss')
// require('./test2.css')

import {name, af} from './sub';

console.log(name)

console.log('loaded!!!!!')


let s = require('./test.html');


document.body.innerHTML = s;
console.log(111);

(async ()=>{
    console.log('a');
    let b = await af();
    console.log('c')
})()