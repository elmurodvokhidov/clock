const hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second');

function setClock() {
    const currentDate = new Date();
    const currentSecond = currentDate.getSeconds() / 60,
        currentMinute = (currentSecond + currentDate.getMinutes()) / 60,
        currentHour = (currentMinute + currentDate.getHours()) / 12;

    setRotation(hourHand, currentHour);
    setRotation(minuteHand, currentMinute);
    setRotation(secondHand, currentSecond);
}


function setRotation(a, b) {
    a.style.setProperty('--rotation', b * 360)
}

setInterval(() => {
    setClock();
}, 1000);

setClock();