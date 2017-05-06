var canvas = undefined;
var ctx = undefined;
var hw;
var hh;
var draw = document.getElementById("drawingCanvas");

window.onload = init;

$(document).ready(function() {
    console.log("Loaded.");
    $('#red').on("slidestop", function(event) {
    console.log("test");
}, false); 
});


var fun = document.getElementsByName('fun');
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var size = document.getElementById("size");
var hider = document.getElementById("hider");
var reset = document.getElementById("reset");

hider.addEventListener("change", function(){
    if (hider.checked == true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    } else{
        redraw();
    }
});

function radioClick(rad){
    if (rad.value ==="none"){
        redraw();
    }
    else if (rad.value ==="white"){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        red.value = 0;
        blue.value = 0;
        green.value = 0;
        drawsquare("white",parseInt(size.value));
    }
    else if (rad.value ==="black"){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        red.value = 255;
        blue.value = 255;
        green.value = 255;
        drawsquare("black",parseInt(size.value));
    }
    else if (rad.value ==="pink") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        red.value = 255;
        blue.value = 192;
        green.value = 203;
        drawsquare("pink",parseInt(size.value));
    }
}

reset.addEventListener("click", function(){
    red.value = 60;
    blue.value = 60;
    green.value = 90;
    size.value = 25;
    redraw();
}, false);

red.addEventListener("change", function(){
    document.getElementById("redval").textContent = red.value;
    redraw();
}, false);

green.addEventListener("change", function(){
    document.getElementById("greenval").textContent = green.value;
    redraw();
}, false);

blue.addEventListener("change", function(){
    document.getElementById("blueval").textContent = blue.value;
    redraw();
}, false);

size.addEventListener("change", function(){
    document.getElementById("sizeval").textContent = size.value;
    redraw();
}, false);



function rgbToHex() {
    return "#" + toHex(red.value) + toHex(green.value) + toHex(blue.value);
}

function toHex(c){
    var hex = parseInt(c).toString(16);
    if (hex.length == 1){
        hex = "0" + hex;
    }
    return hex;
}

function redraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawsquare(rgbToHex(),parseInt(size.value));
}

function drawsquare(color,size){
    //house
    ctx.beginPath();
    ctx.moveTo(hw-size,hh-size);
    ctx.lineTo(hw+size,hh-size);
    ctx.lineTo(hw+size,hh+size);
    ctx.lineTo(hw-size,hh+size);
    ctx.lineTo(hw-size,hh-size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function init(){
    canvas = document.getElementById("drawingCanvas");
    ctx = canvas.getContext("2d");
    hw = canvas.width/2;
    hh = canvas.height/2;
    
    drawsquare(rgbToHex(),25);
    //console.log(rgbToHex());
}

