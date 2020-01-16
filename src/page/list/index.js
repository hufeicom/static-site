import Empty from '@/components/empty/empty.ts'
import './index.scss'

let pageHtml = require('./index.html')

GlobalPage.render(pageHtml)

const empty = new Empty($('#list')[0])
console.log(empty)
empty.show()


$('#list').on('scroll', function (params) {
    console.log(1)
})