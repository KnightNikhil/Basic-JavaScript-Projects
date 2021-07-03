btn = document.getElementById('btn')
cont = document.getElementById('container')

btn.addEventListener('click', notify)

function notify(){
    notification = document.createElement('div')
    notification.classList.add('toast')
    notification.innerText = "This is a notification!!!"
    cont.appendChild(notification)

    setTimeout(()=>{
        notification.remove()
    }, 5000)
}