function setup() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    
    var currentTime = currentHour + '' + currentMinute + '' + currentSecond;

    document.getElementById("hex-clock").textContent = '#' + currentTime;
    document.getElementById("bg").style.backgroundColor = '#' + currentTime;

    setTimeout(setup, 1000);
}

setup();