import "./loading.scss"

const span = document.createElement('span')
span.className = 'wgt-loading'
span.style.position="absolute"

span.innerHTML = `<i class="ico-loading"></i>`



export const Loading = {
    show(wrap:HTMLElement){
        wrap.appendChild(span)
    },
    hide(wrap: HTMLElement){
        wrap.removeChild(span)
    }
}
