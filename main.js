canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car1Width = 120;
var car1Height = 70;
var car1X = 10;
var car1Y = 10;
var car1image = "car2.jpg";

var car2Width = 120;
var car2Height = 70;
var car2X = 10;
var car2Y = 100;
var car2image = "car1.jpg";

var background_img = "racingCanvas.jpg";

function added(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = car1image;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2image;
}

function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imgTag, car1X, car1Y, car1Width, car1Height);
}

function upload_car2(){
    ctx.drawImage(car2_imgTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37'){
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == '38'){
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed == '39'){
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed == '40'){
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed == '87'){
        car2_up();
        console.log("key w");
    }

    if(keyPressed == '65'){
        car2_left();
        console.log("key a");
    }

    if(keyPressed == '83'){
        car2_down();
        console.log("key s");
    }

    if(keyPressed == '68'){
        car2_down();
        console.log("key d");
    }
}

