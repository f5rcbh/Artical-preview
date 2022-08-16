const hover = document.querySelector('.share')

const active = document.querySelector('.active')


hover.addEventListener("click",()=>{
    if(active.style.display == 'none'){
        active.style.display = 'inline-flex'
        console.log('first')
        
    }else{
        active.style.display = 'none'

    }
})