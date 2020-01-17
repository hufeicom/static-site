import Empty from '@/components/widget/empty/empty.ts'
import './index.scss'

new Empty(document.body)


let pageHtml = require('./index.html')

GlobalPage.render(pageHtml)