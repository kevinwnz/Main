function updateClock() {
    //© OBH 2014 - www.oliverboorman.biz 
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    var now = new Date();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    if(hour<10) hour = "0" + hour;
    if(minute<10) minute = "0" + minute;
    if(second<10) second = "0" + second;
    
    var firstRow = hour + ":" + minute + ":" + second + '';
    document.getElementById("row1").innerHTML = firstRow;
    var secondRow = days[day] + "&nbsp;" + date + " - " + months[month] + " - " + year + '';
    document.getElementById("row2").innerHTML = secondRow;
    
    setTimeout("updateClock()",1000);
    }