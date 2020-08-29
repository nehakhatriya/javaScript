//function toupdate time in every one second

function updateTime(){

    let currentdate=new Date()
    let currentHour= currentdate.getHours();
    let currentMinutes= currentdate.getMinutes();
    let currentSeconds= currentdate.getSeconds();
    //setting hours
    currentHour=(currentHour==12)?12:currentHour;
    currentHour=(currentHour>12)?currentHour-12:currentHour;
    let timeofday=(currentHour<12)?"A.M":"P.M";
    //padding min and sec with zero if less than 10
    currentMinutes=(currentMinutes<10?"0":"")+currentMinutes
    currentSeconds=(currentSeconds<10?"0":"")+currentSeconds
    //updated date
    let time=currentHour+":"+currentMinutes+":"+currentSeconds+" "+timeofday

    document.getElementById("clock").innerHTML=time;


}