img = document.querySelector('img')
container = document.querySelector('img')

container.addEventListener('mousemove', (e)=>{
    //This gives us x & y coordinates of cursor
    //where top left of container is (0,0)
    x= e.clientX - e.target.offsetLeft
    y= e.clientY - e.target.offsetTop

    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(2)"
})

container.addEventListener('mouseleave', (e)=>{
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)"
})