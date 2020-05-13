

var imagePositionX = -20;
var backX = 5;
var backY = 5;
    
    
function setup () {
    createCanvas(1200,600);
    strokeWeight(3);
    background(255, 4, 0);
    textSize(30);
    startPage();
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
    
    draw = function() {
       background(255,0,0)
     
    fill(0, 0, 255);
       
 
    //1
    rect(100, 0, 80, 500)
        
    //2
    
        
    //3
    
        
    //4
    
        
    //5
    
        
    //6
    
        
    //7
    
        
    //8
    
        
    //9
    
        
    //10
    
        
        
      
       
    if (imagePositionX>1175) {
        mouseY = 550s;
        imagePositionX = -100;
           
    }
             
      
       
    //1
    if(imagePositionX > 30 && imagePositionX < 100 && mouseY < 120 && mouseY > 0) {
            
        mouseY = 185;
        imagePositionX = -80;
    
    }
        
    //2
    if(imagePositionX > 30 && imagePositionX < 100 && mouseY < 400 && mouseY > 220) {
        mouseY = 185;
        imagePositionX = -80;
        }
       
       
    //3
    if(imagePositionX > 110 && imagePositionX < 160 && mouseY < 174 && mouseY > 0) {
        mouseY = 185;
        imagePositionX = -80;
            
        
    }
       
    //4
    if(imagePositionX > 100 && imagePositionX < 160 && mouseY < 400 && mouseY > 260) {
        mouseY = 185;
        imagePositionX = -80;
    }
        
    //5
    if(imagePositionX > 170 && imagePositionX < 230 && mouseY < 210 && mouseY > 0) {
        mouseY = 185;
        imagePositionX = -80;
            
    }
        
    //6
    if(imagePositionX > 170 && imagePositionX < 230 && mouseY < 400 && mouseY > 360) {
        mouseY = 185;
        imagePositionX = -80;
    }
        
    //7
    if(imagePositionX > 240 && imagePositionX < 300 && mouseY < 155 && mouseY > 0 ) {
        mouseY = 185;
        imagePositionX = -80;
    }
        
    //8
    if(imagePositionX > 240 && imagePositionX < 300 && mouseY < 400 && mouseY > 270) {
        mouseY = 185;
        imagePositionX = -80;
    }
        
    //9
    if(imagePositionX > 310 && imagePositionX <360 && mouseY < 210 && mouseY > 0 ) {
        mouseY = 180;
        imagePositionX = -80;
    }
        
    //10
    if(imagePositionX > 310 && imagePositionX < 360 && mouseY < 400 && mouseY > 290) {
        mouseY = 180;
        imagePositionX = -80;
    }
    
    spaceShip();
    imagePositionX++;
    
    };
    
}
    
