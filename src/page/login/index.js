require('./index.scss')
require('./another.scss')

import {name, af} from './sub';

console.log(name)

console.log('loaded!!!!!')


console.log(111);

(async ()=>{
    console.log('a');
    let b = await af();
    console.log(`value b is : ${b}`)
    console.log('c')
})()

console.log(GlobalPage)
GlobalPage.render(require('./index.html'))
GlobalPage.setTitle('Good')


console.log(jQuery)
console.log($.fn === jQuery.fn, $.fn)