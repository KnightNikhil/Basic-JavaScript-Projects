imgs = document.querySelectorAll("img");
container = document.getElementById("container");

index=0;

function run(){
    index+=1;
    if (index > imgs.length-1){
        index=0
    }
    imgs[index].style.transform = `TranslateX(-${index*250}px)`
}

setInterval(run, 1000);