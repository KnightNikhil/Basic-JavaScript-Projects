menu_btn=  document.getElementById("menu-btn")
nav_bar = document.getElementById('nav-bar')

menu_btn.addEventListener("click", ()=>{
    console.log("working")
    menu_btn.classList.toggle('active')
    nav_bar.classList.toggle('active')
})