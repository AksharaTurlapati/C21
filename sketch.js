var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(70, 580, 180, 20);
    surface1.shapeColor = "red";

    surface2 = createSprite(270, 580, 180, 20);
    surface2.shapeColor = "green";

    surface3 = createSprite(470, 580, 180, 20);
    surface3.shapeColor = "blue";

    surface4 = createSprite(670, 580, 180, 20);
    surface4.shapeColor = "yellow";

    //create box sprite and give velocity
    ball = createSprite(400, 300, 30, 30);
    ball.shapeColor = "black";
    ball.velocityY = 2;
    ball.velocityX = 3;

    edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites();

    ball.bounceOff(edges);
    if(ball.isTouching(surface1)){
        ball.shapeColor = "red";
    }
    else if(ball.isTouching(surface2)){
        ball.shapeColor = "green";
    }
    else if(ball.isTouching(surface3)){
        ball.shapeColor = "blue";
    }
    else if(ball.isTouching(surface4)){
        ball.shapeColor = "yellow";
    }
    
    //add condition to check if box touching surface and make it box
}
