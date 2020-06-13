

var imagePositionX = -20;
var textGröße = 10;
var sollTextWachsen = true;
    
function setup () {
    createCanvas(1200,600);
    strokeWeight(3);
    background(255, 4, 0);
    textSize(30);
    startPage();
}

function done () {
    draw = function() {
        frameRate(30);
        noStroke();
        fill(255,0,0);
        rect(740,1,600,800);
        fill(0,0,0);
        textSize(textGröße)
        text("WoW!",790,110)
        if(textGröße>20){
            sollTextWachsen = false;
        } else if(textGröße<8) {
            sollTextWachsen = true;
        } 

        if(sollTextWachsen === true){
            textGröße = textGröße+1;
        } else {
            textGröße = textGröße-1;
        }

        if (imagePositionX>1175) {
           Level_1();
           imagePositionX = -100;
           mouseY = 750;
               
        }
        spaceShip();
        imagePositionX++;
       
    }
}

function spaceShip() {
    fill(52, 230, 16);
    ellipse(imagePositionX, mouseY, 20, 20);
}

function backButton() {
        
        fill(0, 255, 21);
        rect(5, 5, 45, 45);
        fill(255, 0, 0);
        
        textSize()
        text("BACK", 3, 15, 45, 30);
        
        if(mouseIsPressed && mouseX <50 && mouseX > 5 && mouseY <50 && mouseY > 5) {
        startPage();
        }
         }
    
function startPage() {
    
    draw = function() {
        background(255,0,0)
        fill(51, 0, 255);
        text("EllipToyde", 450, 180);
        fill(0, 255, 68); 
        
        if (mouseIsPressed && mouseY > 250 && mouseY<400 && mouseX>400 && mouseX<700) { 
            Level_1();
        }

        rect(400,250 , 300, 150);  
        
        fill(0, 0, 0);

        text("Start", 460, 360);
    };
}
   
function Level_1() {
   


    draw = function() {
    frameRate(60);
    noStroke();
    background(255,0,0)
    
    fill(0, 0, 255);
       
 
    //1
    rect(100, 0, 50, 250)
                
    //2
    rect(100, 300, 50, 300)
        
    //3
    rect(200, 0, 50, 220)
        
    //4
    rect(200, 270,50,330)
        
    //5
    rect(300,0,50,190)
        
    //6
    rect(300,240,50,360)
        
    //7
    rect(400,0,50,220)
        
    //8
    rect(400,270,50,330)
        
    //9
    rect(500,0,50,250)
        
    //10
    rect(500, 300, 50, 300)
        
    //11
    rect(600, 0, 50, 220)
      
    //12
    rect(600, 270,50,330)

    //13
    rect(700,0,50,190)

    //14
    rect(700,240,50,360)
    

   

    if (imagePositionX > 750) {
        done();
        
        
    }
             
       
    //1
        //rect(100, 0, 50, 250)
        if (imagePositionX > 100 && imagePositionX < 150 && mouseY > 0 && mouseY < 250) {
            mouseY = 275;
            imagePositionX = -100;
      }
    //2
        //rect(100, 300, 50, 300)
        if (imagePositionX > 100 && imagePositionX < 150 && mouseY > 300 && mouseY < 600) {
            mouseY = 275;
            imagePositionX = -100;
        }
    //3
       //rect(200, 0, 50, 220)
       if(imagePositionX > 200 && imagePositionX < 250 && mouseY > 0 && mouseY < 220) {
        mouseY = 275;
        imagePositionX = -100;
       }
    //4
       //rect(200, 270,50,330)
       if(imagePositionX > 200 && imagePositionX < 250 && mouseY > 270 && mouseY <600) {
        mouseY = 275;
        imagePositionX = -100;
       }
    //5
       //rect(300,0,50,190)
       if(imagePositionX > 300 && imagePositionX < 350 && mouseY > 0 && mouseY < 190) {
        mouseY = 275;
        imagePositionX = -100;
       }
    //6
       //rect(300,240,50,360)
       if(imagePositionX > 300 && imagePositionX < 350 && mouseY > 240 && mouseY < 600) {
        mouseY = 275;
        imagePositionX = -100;
       }
    //7
       //rect(400,0,50,220)
       if(imagePositionX > 400 && imagePositionX < 450 && mouseY > 0 && mouseY < 220) {
        mouseY = 275;
        imagePositionX = -100;
       }
    //8
       //rect(400,270,50,330)
    //9
    
    //10
    
    backButton();
    spaceShip();
    imagePositionX++;
    
    };
    
}
    
