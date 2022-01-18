const mobileBtn = document.getElementById('mobile-cta')
      mobileBtnExit = document.getElementById('mobile-exit-cta')
      nav = document.querySelector('nav')

mobileBtn.addEventListener('click', (e)=>{
    nav.style.display='block'
})

mobileBtnExit.addEventListener('click', (e)=>{
    nav.style.display='none'
})
