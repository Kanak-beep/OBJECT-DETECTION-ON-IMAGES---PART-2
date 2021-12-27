status = "";

function preload(){
    img = loadImage("bedroom.jpeg");
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
image(img,0,0,640,420);
fill("#FF0000");
textSize(14);
text("Bed 76%",145,185);
noFill();
stroke("#FF0000");
rect(120,160,400,200);

if(status != "")
{
  for (var i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML = "Status : Object Detected";

    fill(255, 0, 0);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke(255, 0, 0);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  }
}
}

function back(){
window.location = "index.html";
}