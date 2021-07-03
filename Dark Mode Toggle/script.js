btn = document.getElementById("btn")
content = document.getElementById("content")
chkbox  = document.getElementById("checkbox")

btn.addEventListener('click', ()=>{
    btn.classList.toggle('active')
    content.classList.toggle('active')
    document.body.classList.toggle('active')
    
    if (btn.innerText === "Normal mode"){
        btn.innerText = "Dark mode"}
    
    else{
            btn.innerText = "Normal mode"
        }
})

chkbox.addEventListener('change', (e)=>{
    
    document.body.classList.toggle('active',e.target.checked)
    btn.classList.toggle('active')
    content.classList.toggle('active')
    

    if (btn.innerText === "Normal mode"){
        btn.innerText = "Dark mode"}
    
    else{
            btn.innerText = "Normal mode"
        }
})