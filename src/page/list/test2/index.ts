import "./index.scss"

import Empty, {ErrorName} from '@/components/widget/empty/empty'
import {Loading} from "@/components/widget/loading/loading"
import { Toast} from "@/components/widget/toast/toast"

GP.render(require('./index.html'))

const target = document.getElementById('test2')
let emptyBox = target.querySelector('.empty')
let loadingBox:HTMLElement = target.querySelector('.loading')

let empty = new Empty(emptyBox)

empty.show()

empty.render(ErrorName.OFFLINE)
empty.show()

setTimeout(()=>{
    empty.render(ErrorName.TIMEERROR)
    setTimeout(()=>{
        empty.render(ErrorName.NO_CONTENT)
        setTimeout(()=>{
            empty.hide()            
        }, 3500)
    }, 1500)
}, 3000)

Loading.show(loadingBox)


setTimeout(()=>{
    // Loading.hide(loadingBox)
}, 4000)


Toast('There is a  callback', {
    callback: function () {
        Toast('no callback')
    }
})