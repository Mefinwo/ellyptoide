

var imagePositionX = -20;
var backX = 5;
var backY = 5;
var textGröße = 6;
    
function setup () {
    createCanvas(1200,600);
    strokeWeight(3);
    background(255, 4, 0);
    textSize(30);
    startPage();
}

function done () {
    draw = function() {
        textSize(textGröße)
        text("WoW",790,110)
        if(textGröße>12){
            textGröße--;
        }
        if(textGröße<4) {
            textGröße++;
        }
        textGröße++;
    }
}

function spaceShip() {
    fill(52, 230, 16);
    ellipse(imagePositionX, mouseY, 20, 20);
}

function backButton() {
        
        fill(0, 255, 21);
        rect(backX, backY, 45, 45);
        fill(255, 0, 0);
        
        text("BACK", 3, 15, 45, 30);
        
        if(backX <50 && backX > 5 && backY <50 && backY > 5) {
        startPage();
        
        }
         }
    
function startPage() {
    
    fill(51, 0, 255);
    text("EllipToyde", 450, 180);

    draw = function() {
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
    if (imagePositionX>750){
        done();
    }


    draw = function() {
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
    

    if (imagePositionX>1175) {
        mouseY = 275;
        imagePositionX = -100;
           
    }
             
   
       
    //1
      
    //2
    
    //3
       
    //4
     
    //5
     
    //6
     
    //7
     
    //8
    
    //9
    
    //10
    
    spaceShip();
    imagePositionX++;
    
    };
    
}
    
