import './empty.scss'

enum ErrorName {
    NO_CONTENT="nocontent",
    TIMEERROR="timeerror",
    OFFLINE="offline"
}


const ErrorType = {
    "nocontent": {
        img: 'nocontent',
        text: '加载失败，请点击重试'
    },
    "timeerror": {
        img: 'timeerror',
        text: '加载失败，请将设备时间设置为当前时间后再试'
    },
    "offline": {
        img: 'offline',
        text: '网络异常，请检查网络后点击重试'
    }
}
export default class Empty {
    wrap: HTMLElement
    state: boolean
    constructor(wrap) {
        this.wrap = document.createElement('div')
        this.wrap.className = 'wgt-error-tip'

        this.toggle(false)
        wrap.appendChild(this.wrap)
    }
    toggle(show?: boolean) {
        if (show === undefined) show = !this.state;
        this.state = show;
        this.wrap.style.display = this.state ? 'block' : 'none'
    }
    show( type:ErrorName ) {
        if( type ) this.render(type)
        this.toggle(true)
    }
    hide() {
        this.toggle(false)
    }
    render(type:ErrorName): void{
        const { img, text } = ErrorType[type]
        this.wrap.innerHTML = `<div><span><i class="error-img ${img}"></i><span><p>${text}</p></div>`
    }
}

