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


var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var size = document.getElementById("size");

red.addEventListener("change", function(){
    console.log(red.value);
    document.getElementById("redval").textContent = red.value;
    redraw();
}, false);

green.addEventListener("change", function(){
    console.log(green.value);
    document.getElementById("greenval").textContent = green.value;
    redraw();
}, false);

blue.addEventListener("change", function(){
    console.log(blue.value);
    document.getElementById("blueval").textContent = blue.value;
    redraw();
}, false);

size.addEventListener("change", function(){
    console.log(size.value);
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
    
    drawsquare("pink",25);
    //console.log(rgbToHex());
}

