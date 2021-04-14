var mouseevent="empty";
var lastpositenofx;
var lastpostionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
withofline=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
mouseevent="mousedown";
color=document.getElementById("color").value;
withofline=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mouseevent="mouseleave";}

    canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=withofline;
        ctx.arc(currentpositionofmousex,currentpositionofmousey,20,0,2*Math.PI);        ctx.stroke();
    }
    lastpositenofx=currentpositionofmousex;
    lastpositenofy=currentpositionofmousey;
}   