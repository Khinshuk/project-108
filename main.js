function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('',modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    
r= Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;

document.getElementById("result_lable").innerHTML='I can hear- '+results[0].label;
document.getElementById("result_accuracy").innerHTML='My accuracy is- '+(results[0].confidence*100).toFixed(2)+"%";

document.getElementById("result_lable").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("result_accuracy").style.color="rgb("+r+","+g+","+b+")";

img1=document.getElementById('trex');
img2=document.getElementById('cat');
img3=document.getElementById('dog');
img4=document.getElementById('cow');

if(results[0].label=="roar"){
    img1.src='T rex.gif';
    img2.src='cat.png';
    img3.src='dog.png';
    img4.src='cow.png';
}
else if(results[0].label=="meow"){
    img1.src='aliens-01.png';
    img2.src='cat.gif';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
}
else if(results[0].label=="bark"){
    img1.src='T rex.png';
    img2.src='cat.png';
    img3.src='dog.gif';
    img4.src='cow.png';
}
else if(results[0].label=="moo"){
    img1.src='T rex.png';
    img2.src='cat.png';
    img3.src='dog.png';
    img4.src='cow.gif';
}
}
}