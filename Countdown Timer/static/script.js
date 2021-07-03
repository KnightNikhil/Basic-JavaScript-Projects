end_date = "18 May 2021"

box_ids = {
    'days': document.querySelector("#days"),
    'hours': document.querySelector("#hours") ,
    'minutes': document.querySelector("#minutes") ,
    'seconds': document.querySelector("#seconds")
}


time_left = {
    'days': 0 ,
    'hours' : 0,
    'minutes' :0,
    'seconds':0
}

function countdown(){
    current_date = new Date()
    end_date = new Date(end_date)
    seconds_left = Math.floor((end_date - current_date )/1000)


    time_left['seconds'] = seconds_left % 60
    time_left['minutes'] = Math.floor(seconds_left/60)%60
    time_left['hours'] = Math.floor(seconds_left/3600)%24
    time_left['days'] = Math.floor(seconds_left/(3600*24))

    box_ids['days'].textContent = time_left['days']
    box_ids['hours'].textContent = time_left['hours']
    box_ids['minutes'].textContent = time_left['minutes']
    box_ids['seconds'].textContent = time_left['seconds']
}

countdown()

setInterval(countdown, 1000);
