text = "I am an awesome man!! And I created this content!!"
i = 0
function writeText(){

    document.body.innerText = text.slice(0, i)
    i+=1
    if (i>text.length){
        i=0
    }
}

setInterval(writeText, 1000);