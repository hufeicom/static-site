import './empty.scss'

const emptyImg = require('./imgs/empty.png'), emptyText = "内容空空~"

export default class Empty {
    wrap: HTMLElement
    state: boolean
    constructor(wrap, state = false, html) {
        this.wrap = document.createElement('div')
        this.wrap.className = 'wgt-empty'
        this.wrap.innerHTML = html || this.render()

        this.toggle(state)
        wrap.appendChild(this.wrap)
    }
    toggle(show?: boolean) {
        if (show === undefined) show = !this.state;
        this.state = show;
        this.wrap.style.display = this.state ? 'block' : 'none'
    }
    show() {
        this.toggle(true)
    }
    hide() {
        this.toggle(false)
    }
    render(img=emptyImg, text=emptyText): string{
        return  `<div><img src="${img}" alt=""><p>${text}</p></div>`
    }
}

