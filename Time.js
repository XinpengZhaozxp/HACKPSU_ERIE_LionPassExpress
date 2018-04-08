var temp = ("10:05pm - 4:45pm");     //original string

var n = temp.search("-");     // seperate symbol "-"

var startTime = temp.substr(0,n-1); // begin time string
var endTime = temp.substr(n+1,temp.length);// end time string

var m = startTime.search(":");
var k = endTime.search(":");

var beginMin = Number(startTime.substr(m+1,2));
var beginHour = Number(startTime.substr(0,m));

var endMin = Number(endTime.substr(k+1,2));
var endHour = Number(endTime.substr(1,k-1));

var begin, end;

if (startTime.search("pm") != -1){
    begin = beginMin + beginHour * 60 + 720;
}
else {
    begin = beginMin + beginHour * 60;
}

if (endTime.search("pm") != -1){
    end = endMin + endHour * 60 + 720;
}
else{
    end = endMin + endHour * 60;
