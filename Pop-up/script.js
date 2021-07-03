btn = document.getElementById("btn")
popup = document.getElementById("pop-up-container")
rmv= document.getElementById("close")

btn.addEventListener('click', ()=>{
    popup.classList.add('active')
    btn.classList.add('active')
    
})

rmv.addEventListener('click', ()=>{
    popup.classList.remove('active')
    btn.classList.remove('active')
})
