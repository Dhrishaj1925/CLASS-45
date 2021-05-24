var apple,microsoft,google;
var SteveJobs,BillGates,SundarPichai;
var appleimg,microsoftimg,googleimg;
var SteveJobsimg,BillGatesimg,SundarPichaiimg;
var block1, block2,block3,block4,block5,block6;


function preload(){
 appleimg = loadImage("apple.png");
 microsoftimg = loadImage("MICROSOFT.png");
 googleimg = loadImage("GOOGLE.png");
 SteveJobsimg = loadImage("stevejobs.png");
 BillGatesimg = loadImage("BILLGATES.png");
 SundarPichaiimg = loadImage("SUNDARPICHAI.png");
 
}



function setup(){
    createCanvas(800,600);
     SteveJobs = createSprite(50,535,10,20);
     BillGates = createSprite(350,550,10,20);
     SundarPichai = createSprite(750,550,10,20);
     apple = createSprite(50,20,10,20);
     microsoft = createSprite(350,20,10,20);
     google = createSprite(750,20,10,20);
     block1 = createSprite(600,400,400,30);
     block2 = createSprite(200,300,600,20);
     block3 = createSprite(350,200,500,10);
     block4 = createSprite(210,250,600,10);
     block5 = createSprite(100,150,100,10);
     
     block6 = createSprite(230,100,400,10);
     
     edges = createEdgeSprites();
     block1.velocityX = -4;
     block2.velocityX = -6;
     block3.velocityX = -3;
     block4.velocityX = -2;
     block5.velocityX = -5;
     block6.velocityX = -8;
    

}



function draw(){
background("yellow");
SteveJobs.addImage(SteveJobsimg);
BillGates.addImage(BillGatesimg);
SundarPichai.addImage(SundarPichaiimg);
BillGates.scale = 0.2;
SundarPichai.scale = 0.2;
apple.addImage(appleimg);
apple.scale = 0.2;
microsoft.addImage(microsoftimg);
microsoft.scale = 0.2;
google.addImage(googleimg);
google.scale = 0.2;
block1.shapeColor = "blue";
block2.shapeColor = "red";
block3.shapeColor = "green";
block4.shapeColor = "brown";
block5.shapeColor = "black";
block6.shapeColor = "purple";
block1.bounceOff(edges);
block2.bounceOff(edges);
block3.bounceOff(edges);
block4.bounceOff(edges);
block5.bounceOff(edges);
block6.bounceOff(edges);
drawSprites();
    
}