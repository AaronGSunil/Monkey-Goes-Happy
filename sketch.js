var background_img,background;
var player, player_running;
var ground,ground_img; 

var banana_grp, bananaImage;
var stone_grp, stone_img;

var score = 0;


function preload(){
  background_img = loadImage("jungle.jpg");
  player_running  =  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage  =  loadImage("banana.png");
  stone_img  =  loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(600,400);
  
  backGround = createSprite(0,40,800,400);
  backGround.addImage(background_img);
  backGround.scale = 1.5;
  backGround.x = backGround.width/2;
  backGround.velocityX = -4;
  
  player  =  createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale  =  0.1;
  
  ground  =  createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = false;
  
  banana_grp  =  new Group();
  stone_grp  =  new Group();
  
  score  =  0;
}

function draw() {
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  if(backGround.x<100){
    backGround.x = backGround.width/2;
  }
  
    if(banana_grp.isTouching(player)){
      banana_grp.destroyEach();
    score  =  score + 2;
    }
      switch(score){
        case 10: player.scale = 0.12;
                break;
        case 20: player.scale = 0.14;
                break;
        case 30: player.scale = 0.16;
                break;
        case 40: player.scale = 0.18;
                break;
        case 50: player.scale = 0.20;
                break;
        case 60: player.scale = 0.12;
                break;
        case 70: player.scale = 0.14;
                break;        
        case 80: player.scale = 0.16;
                break;        
        case 90: player.scale = 0.18;
                break;       
        case 100: player.scale = 0.20;
                break;      
                
        default: break;
    }
    
  
    
  
    if(keyDown("space") ) {
      player.velocityY  =  -12;
    }
    player.velocityY  =  player.velocityY + 0.8;
  
    player.collide(ground);
    spawnFood();
    spawnstones();
 
    if(stone_grp.isTouching(player)){ 
        player.scale = 0.08;
     // score = score-2;
    }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 120  ===  0) {
    var banana  =  createSprite(600,250,40,10);
    banana.y  =  random(120,200);    
    banana.addImage(bananaImage);
    banana.scale  =  0.05;
    banana.velocityX  =  -5;
     //assign lifetime to the variable
    banana.lifetime  =  300;
    player.depth  =  banana.depth + 1;
    
    //add each banana to the group
    banana_grp.add(banana);
  }
}

function spawnstones() {
  if(frameCount % 200  ===  0) {
    var stone  =  createSprite(800,350,10,40);
    stone.velocityX  =  -5;
    stone.addImage(stone_img);
    
    //assign scale and lifetime to the stone     
    stone.scale  =  0.2;
    stone.lifetime  =  300;
    
    //add each stone to the group
    stone_grp.add(stone);
  }
}
