import Empty from '@/components/widget/empty/empty.ts'
import './index.scss'

let pageHtml = require('./index.html')

GlobalPage.render(pageHtml)

// const empty = new Empty($('#list')[0])
// empty.show()


$('#list').on('scroll', function (params) {
    console.log(1)
})