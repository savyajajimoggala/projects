//create a analog clock
analogClock = function () {
    setInterval(() => {
        let a = new Date();
        hr = a.getHours();
        min = a.getMinutes();
        sec = a.getSeconds();
        hr_rotation = 30 * hr + min / 2;
        min_rotation = 6 * min;
        sec_rotation = 6 * sec;
        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
}
analogClock();