status = "";

function preload(){
    img = loadImage("bathroom.jpeg");
}
    
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML = "Status: Detecting Objects";
}
    
function modelLoaded(){
    console.log('Model Loaded');
    status = true;
    objectDetector.detect(img,gotResult);
}
    
function gotResult(error,results){
    if(error){
    console.error(error);
}
else{
    console.log(results);
}
}

function draw(){
image(img,0,0,1000,450);
fill("#FF0000");
textSize(14);
text("Shelf 67%",145,185);
noFill();
stroke("#FF0000");
rect(120,190,400,200);
}

function back(){
window.location = "index.html";
}