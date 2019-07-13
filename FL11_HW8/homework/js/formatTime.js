function formatTime(minutes) {
    let mins_in_day = 1440;
    let mins_in_hour = 60;
    let days = Math.floor(minutes/mins_in_day);
    minutes -= days * mins_in_day;
    let hours = Math.floor(minutes/mins_in_hour);
    minutes -= hours * mins_in_hour;
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}
formatTime(1);