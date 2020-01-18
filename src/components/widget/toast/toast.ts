import './toast.scss'
export interface OPTION {
    delay?: number,
    backgroundColor?: string,
    fontSize?: string,
    borderRadius?: string,
    callback?: Function
}


export const Toast = (string, option?:OPTION):void=>{
    let options = Object.assign({
        delay:2e3
    }, option);
    let toast = document.createElement('div');
    toast.className = 'wgt-toast'
    toast.setAttribute('style', `position:absolute; z-index: 9999; color: #fff; padding: 15px 30px; 
    background-color: ${options.backgroundColor|| "#45494d"};
    font-size: ${options.fontSize|| "12px"};
    border-radius: ${options.borderRadius|| "3px"};
    `)
    toast.innerHTML = string;
    document.body.appendChild(toast);

    let top = window.innerHeight / 2 + window.scrollY - 130,
    left = (window.innerWidth - ~~(window.getComputedStyle(toast))['width'] - 60 ) / 2;

    top  = top > 50 ? top : 50;
    left = left >= 0 ? left : 0;

    toast.style.left = `${left}px`
    toast.style.top = `${top}px`

    toast.className += ' show'

    setTimeout(()=>{
        toast.className = toast.className.replace('show', 'hide')
        setTimeout(()=>{
            document.body.removeChild(toast);
            toast = null;
            options.callback && options.callback()
        }, 200)
    }, options.delay)
}
