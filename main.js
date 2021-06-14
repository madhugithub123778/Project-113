function setup(){
c1 = createCanvas(700, 600);
c1.center();
v1 = createCapture(VIDEO);
v1.hide();
}

function draw(){
image (v1,0, 0, 700, 600);

tint (filtero);

fill("violet");
stroke(0, 0, 255);
var r = 100;

for (var i = 1;i<=10;i++){
circle(0, 10, r);
r = r-10;}

fill("violet");
stroke(0, 0, 255);
var r = 100;

for (var i = 1;i<=10;i++){
circle(0, 100, r);
r = r-10;}

fill("violet");
stroke(0, 0, 255);
var r = 100;

for (var i = 1;i<=10;i++){
circle(0, 200, r);
r = r-10;}

fill("aqua");
stroke(0, 0, 255);
var r = 100;

for (var i = 1;i<=10;i++){
circle(700, 590, r);
r = r-10;}

fill("aqua");
stroke(0, 0, 255);
var r = 100;

for (var i = 1;i<=10;i++){
circle(700, 500, r);
r = r-10;}

fill("aqua");
stroke(0, 0, 255);
var r = 100;

for (var i = 1;i<=10;i++){
circle(700, 410, r);
r = r-10;}

translate(60, 550);
  noStroke();
  fill("yellow")
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 50);
    rotate(PI/5);
  }

  translate(110, 0);
  noStroke();
  fill("orange")
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 50);
    rotate(PI/5);
  }

  translate(110, 0);
  noStroke();
  fill("red")
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 50);
    rotate(PI/5);
  }

  translate(360, -500);
  noStroke();
  fill("paleturquoise")
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 50);
    rotate(PI/5);
  }

  translate(-110,0);
  noStroke();
  fill("lightskyblue")
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 50);
    rotate(PI/5);
  }

  translate(-110,0);
  noStroke();
  fill("blue")
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 10, 50);
    rotate(PI/5);
  }

}

function take_pic(){
    save ("my_photo.png");}
    
    filtero = "";
    
    function change(){
    filtero = document.getElementById("colour_in").value;
    
    
    }