require('./index.scss')
require('./another.scss')

import {name, af} from './sub';

import Empty from '@/components/widget/empty/empty'

new Empty(document.body)

console.log(name)

console.log('loaded!!!!!')


console.log(111);

(async ()=>{
    console.log('a');
    let b = await af(1);
    console.log(`value b is : ${b}`)
    console.log('c')
})()

console.log(GP)
GP.render(require('./index.html'))
GP.setTitle('Good')
