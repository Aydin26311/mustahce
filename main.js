nosex=0;
nosey=0;
function preload(){
mustache_nose=loadImage("https://i.postimg.cc/DfgWFW1R/m.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw(){
image(video,0,0,300,300);
image(mustache_nose,nosex,nosey,40,20);
}
function take_snapshot(){
    save("mypicto.png");
}
function modelloaded(){
    console.log("model is loaded");
}
function gotposes(results){
    console.log(results);
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
    nosex=results[0].pose.nose.x-20;
    nosey=results[0].pose.nose.y+5;
}
