function Time(){
    var date = new Date();
    var anoNovoDate = new Date("December 31, 2021 23:59:59");
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var da = 1;
    var ha = anoNovoDate.getHours();
    var ma = anoNovoDate.getMinutes(); 
    var sa = anoNovoDate.getSeconds();
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    var atime =da+":"+(ha - h) + ":" + (ma - m) + ":" + (sa+1 - s);
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.getElementById("anoNovoDisplay").innerText = atime;
    document.getElementById("anoNovoDisplay").textContent = atime;

    
    setTimeout(Time, 1000);
}

Time();


