require('./index.scss')
require('./test.scss')

import {name, af} from './sub';

console.log(name)

console.log('loaded!!!!!')


console.log(111);

(async ()=>{
    console.log('a');
    let b = await af();
    console.log('c')
})()

console.log(GlobalPage)
GlobalPage.innerHTML = require('./index.html')

