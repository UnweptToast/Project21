var bullet, wall;
var speed, weight;
var bulletBlocker;
var damage;

function setup() {
    createCanvas(windowWidth,windowHeight);
    thickness = Math.round(random(50,183))
    wall = createSprite(width*0.7,height/2,thickness,200);
    bullet = createSprite(width/6, wall.y, 20, 5);
    bullet.shapeColor = "white";

    bulletBlocker = createSprite(0,wall.y,500,height/2);
    bulletBlocker.x = width + bulletBlocker.width/2;

    speed = Math.round(random(223,310));
    weight = Math.round(random(3,52));
    bullet.velocityX = speed;
}

function draw() {
    background(0);

    if(hasCollided(bullet,wall) === true) {
        damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
        bullet.velocityX = 0;

        if(damage < 10) {
            wall.shapeColor = color(0,255,0);
        }
        else if(damage >= 10) {
            wall.shapeColor = color(255,0,0);
        }
        text("Speed: " + speed, (width * 3/4), 50);
        text("Wall thickness: " + thickness, (width * 1/4), 50);
        text("Bullet Weight: " + weight, (width * 2/4), 50)
    }
    
    if(hasCollided(bullet,bulletBlocker) === true) {
        wall.shapeColor = color(255,0,0);
    }

    drawSprites();
}

