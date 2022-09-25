var active="";
noseX=0;
noseY=0;
faceX=0;
faceY=0;
function preload(){
face=loadImage('https://i.ibb.co/bJKsHrN/image-removebg-preview-1.png');
red=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
yellow=loadImage('https://cdn.shoplightspeed.com/shops/605536/files/743243/650x750x2/yellow-sponge-clown-nose-1-inch-by-magic-by-gosh.jpg');
green=loadImage('https://i.ibb.co/98K59s9/image-removebg-preview-5.png');
blue=loadImage('https://i.ibb.co/NmXn0sK/image-removebg-preview-8.png');
}
function facefilter(){
    active="facefinal";
}
function colred(){
    active="red";
}
function colyellow(){
    active="yellow";
}
function colgreen(){
    active="green";
}
function colblue(){
    active="blue";
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
 
   posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("missionposenutisasuccess");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-15;
    noseY=results[0].pose.nose.y-15;
}
}
function draw(){
     image(video,0,0,400,400);
if(active=="red"){
    image(red,noseX,noseY,30,30);
}
if(active=="yellow"){
    image(yellow,noseX,noseY,30,30);
}
if(active=="green"){
    image(green,noseX,noseY,30,30);
}
if(active=="blue"){
    image(blue,noseX,noseY,30,30);
}
if(active=="facefinal"){
    image(face,noseX,noseY,100,100   );
}
}
function takesnap(){
    save('er-se-eb-pp.png')
}