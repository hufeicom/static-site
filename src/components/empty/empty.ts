import './empty.scss'

const emptyImg = require('./imgs/empty.png'),
      emptyText = "内容空空~"

const defaultHtml = `<div><img src="${emptyImg}" alt=""><p>${emptyText}</p></div>`

console.log(1)
export default class Empty {
    wrap: HTMLElement
    state: boolean
    constructor(wrap, state = false, html = defaultHtml){
        this.wrap = document.createElement('div')
        this.wrap.className = 'wgt-empty'
        this.wrap.innerHTML = html
console.log(1)
this.toggle(state)
        wrap.appendChild(this.wrap)
    }
    toggle(show?:boolean){
        if( show === undefined) show = !this.state;
        this.state = show;
        this.wrap.style.display = this.state ? 'block' : 'none'
    }
    show(){
        this.toggle(true)
    }
    hide(){
        this.toggle(false)
    }
}

