//calculation of hour hand
/*12 hour=360 deg
1 hour=360/12=30
h hours=30h*/

//calculation of minute hand
/*60 min=30
1 min=30/60=1/2
m min=(1/2)m
60min=360 deg
1min=360/60=6deg
m mins=6m

//calculation of second hand
/*60sec=360deg
1sec=360/60=6deg
s secs=6s */


let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime(){
let date=new Date();

//Getting hours, mins, secs from Date
let hh=date.getHours();
let mm =date.getMinutes();
let ss=date.getSeconds();
let hRotation=30*hh + mm/2;
let mRotation=6*mm;
let sRotation=6*ss;
hr.style.transform=`rotate(${hRotation}deg)`;
min.style.transform=`rotate(${mRotation}deg)`;
sec.style.transform=`rotate(${sRotation}deg)`;
}
setInterval(displayTime,1000); //1000 =1 sec