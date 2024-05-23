let interval_fn = null;
time12hrs = function() {
       interval_fn = setInterval(() => {
        let  ampm='';
        a = new Date();
        hr = a.getHours();
        min = a.getMinutes();
        sec = a.getSeconds();
        if(hr>=12) {
            hr = hr-12;
            ampm = "PM";
        }
        else {
            ampm = "AM";
        }
        document.getElementById("time").innerHTML=`${hr}:${min}:${sec} ${ampm}`;
    },1000);
}

time24hrs = function () {
    interval_fn = setInterval(() => {
        a = new Date();
        hr = a.getHours();
        min = a.getMinutes();
        sec = a.getSeconds();
        document.getElementById("time").innerHTML = `${hr}:${min}:${sec}`;

    }, 1000);
}

 timeFormat = function(hrFormat) {
    clearInterval(interval_fn);
    if(hrFormat == '12h') {
       
        time12hrs()
        
;    }
else {
    time24hrs();
    
}
 }