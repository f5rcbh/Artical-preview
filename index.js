const hover = document.querySelector('.share')

const active = document.querySelector('.active')

const shareImg = document.querySelector('path')

const imgBackGround = document.querySelector('.img_share')

hover.addEventListener("click",()=>{
    if(active.style.display == 'none'){
        active.style.display = 'inline-flex'
        shareImg.style.fill = '#fff'
        imgBackGround.style.backgroundColor ='#6d7f97'
        
    }else{
        active.style.display = 'none'
        shareImg.style.fill = '#6E8098'
        imgBackGround.style.backgroundColor = '#ecf2f8'

    }
})