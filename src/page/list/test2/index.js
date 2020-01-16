import "./index.scss"

import Empty from '@/components/widget/empty/empty.ts'
import {Loading} from "@/components/widget/loading/loading.ts"
import { Toast} from "@/components/widget/toast/toast.ts"

GlobalPage.render(require('./index.html'))

const target = document.getElementById('test2')
let emptyBox = target.querySelector('.empty')
let loadingBox = target.querySelector('.loading')

let empty = new Empty(emptyBox)

empty.show()

empty.render('offline')
empty.show()

setTimeout(()=>{
    empty.render('timeerror')
    setTimeout(()=>{
        empty.render('nocontent')
        setTimeout(()=>{
            empty.hide()            
        }, 3500)
    }, 1500)
}, 3000)

Loading.show(loadingBox)


setTimeout(()=>{
    Loading.hide(loadingBox)
}, 4000)

Toast('There is a  callback', {
    callback: function (params) {
        Toast('no callback')
    }
})