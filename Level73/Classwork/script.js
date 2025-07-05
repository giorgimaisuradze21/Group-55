function getDayName(year, month, day) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(year, month - 1, day);
    return days[date.getDay()];
}


console.log(getDayName(1993, 7, 12)); 