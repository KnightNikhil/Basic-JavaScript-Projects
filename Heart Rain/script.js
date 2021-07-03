function createheart(){
    
    heart = document.createElement('div')
    heart.classList.add("heart")
    heart.style.left = Math.random() *500 + "px"
    t = Math.random() * 2 + 3 + "s"
    heart.style.annimationDuration = t
    //console.log(t)
    heart.innerText = "❤"

    document.body.appendChild(heart) 

    setTimeout(() => {
       heart.remove() 
    }, 10000);

}

setInterval(createheart, 1000);


