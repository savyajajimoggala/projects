//create a digital clock

digitalClock = function () {
    let dt = new Date();
    a = new Date();
    let it = setInterval(() => {
        a = new Date();
        aSplit = a.toString().split(" ");
        console.log(aSplit[4]);
        date = aSplit.slice(0, 4);
        document.getElementById("clock").innerHTML = aSplit[4] + "<br>"+date;

    }, 1000);
}
            digitalClock();