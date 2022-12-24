function setup() {
    var currentDate = new Date();

    var currentHour = currentDate.getHours();
    if(currentHour < 10) currentHour = '0' + currentHour;

    var currentMinute = currentDate.getMinutes();
    if(currentMinute < 10) currentMinute = '0' + currentMinute;

    var currentSecond = currentDate.getSeconds();
    if(currentSecond < 10) currentSecond = '0' + currentSecond;
    
    var currentTime = currentHour + '' + currentMinute + '' + currentSecond;

    document.getElementById("hex-clock").textContent = '#' + currentTime;
    document.getElementById("bg").style.backgroundColor = '#' + currentTime;

    setTimeout(setup, 1000);
}

setup();
