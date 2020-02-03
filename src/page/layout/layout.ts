import './layout.scss'

const wrap = document.getElementById('app');
const GP = {
    render(str:string|HTMLElement){
        if(typeof str === 'string'){
            wrap.innerHTML = str;
        } else {
            wrap.appendChild(str)
        }
    },
    setTitle(str:string){
        document.title = str
    }
}

module.exports = GP;
