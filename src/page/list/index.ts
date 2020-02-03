import Empty from '@/components/widget/empty/empty'
import './index.scss'

new Empty(document.body)


let pageHtml = require('./index.html')

GP.render(pageHtml)

let ab = new ArrayBuffer(16)

console.log(ab.byteLength)

let i32a = Int32Array.from([0,1,2])
let i32b = Int32Array.from([1])

console.log(i32a);

console.log(ArrayBuffer.isView( i32a))

const l = console.log;
l(i32b)


GP = {render(){}, setTitle(){}}