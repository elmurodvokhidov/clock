const hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secundHand = document.querySelector('.secund');

function setRotation(a, b) {
    a.style.setProperty('--rotation', b * 360);
}

function setClock() {
    let currentDate = new Date();
    let currentSecond = currentDate.getSeconds() / 60;
    let currentMinute = (currentSecond + currentDate.getMinutes()) / 60
    let currentHour = (currentMinute + currentDate.getHours()) / 12

    setRotation(hourHand, currentHour);
    setRotation(minuteHand, currentMinute);
    setRotation(secundHand, currentSecond);
}

setInterval(() => {
    setClock();
}, 1000);