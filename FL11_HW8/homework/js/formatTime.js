function formatTime(min){
    let days = Math.floor(min / 1440);
    let hours = Math.floor((min - days * 1440) / 60);
    let minutes = min -days * 1440 - hours * 60;
    return days + "day(s) " + hours + " hour(s) " + minutes + " minute(s)";
}
formatTime(3000);
