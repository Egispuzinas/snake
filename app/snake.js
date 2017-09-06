var canvas=document.querySelector('.canvas')
var snake=[new Snake()];
snake[0].show();
function snakeinfo() {
    var rect=document.querySelector('.rect');

    rect.style.width='10px';
    rect.style.height='10px';
    rect.style.backgroundColor='white';
    rect.style.position='absolute';
}

function Snake() {
    this.x=0;
    this.y=0;
    this.speedx=10;
    this.speedy=10;
    this.xvalue=function() {
    this.x = this.x+this.speedx
    return this.x
    }
    this.yvalue=function() {
    this.y = this.y+this.speedy
    return this.y
    }
    this.xminvalue=function() {
    this.x = this.x-this.speedx
    return this.x
    }
    this.yminvalue=function() {
    this.y = this.y-this.speedy
    return this.y
    }
    this.show=function() {
        var html='<div class="rect"></div>';
        canvas.insertAdjacentHTML('afterbegin',html);
        snakeinfo();
    }
    this.moveR=function() {
        var rect=document.querySelector('.rect');
            rect.style.transform='translate('+this.xvalue()+'px, '+this.y+'px)'
    }
    this.moveD=function() {
        var rect=document.querySelector('.rect');
            rect.style.transform='translate('+this.x+'px, '+this.yvalue()+'px)'
    }
    this.moveL=function() {
        var rect=document.querySelector('.rect');
            rect.style.transform='translate('+this.xminvalue()+'px, '+this.y+'px)'
    }
    this.moveU=function() {
        var rect=document.querySelector('.rect');
            rect.style.transform='translate('+this.x+'px, '+this.yminvalue()+'px)'
    }
    this.eatfood=function() {
        var rect=document.querySelector('.rect');
        if (this.x == getfood.locationX && this.y+10 == getfood.locationY) {
            this.total++;
            getfood.spawnfood();
            this.addtail();
        }
    }
    this.addtail=function() {
        snake.push(new Snake)
    }
    this.tailposition=function() {
        for (var i = 0; i < this.length; i++) {
            this[i-1].style.transform='translate('+this.x+'px, '+this.y+'px)'
        }
    }


}

var mR;
var mD;
var mL;
var mU;

function snakeGoD() {
    mD = setInterval(function() {
        if (snake[0].y<480) {
            snake[0].moveD()
            snake[0].eatfood()
        }
    }, 161)
}
function snakeGoR() {
    mR = setInterval(function() {
        if (snake[0].x<490) {
            snake[0].moveR()
            snake[0].eatfood()
        }
    }, 161)
}
function snakeGoL() {
    mL = setInterval(function() {
        if (snake[0].x>0) {
            snake[0].moveL()
            snake[0].eatfood()
        }
    }, 161)
}
function snakeGoU() {
    mU = setInterval(function() {
        if (snake[0].y>=0) {
            snake[0].moveU()
            snake[0].eatfood()
        }
    }, 161)
}
document.addEventListener('keydown', function(){
    if (event.keyCode==39){//right
        snakeGoR();
        clearInterval(mD);
        clearInterval(mL);
        clearInterval(mU);
    }
    if (event.keyCode==40) {//down
        snakeGoD();
        clearInterval(mR)
        clearInterval(mL)
        clearInterval(mU)
    }
    if (event.keyCode==37) {//left
        snakeGoL();
        clearInterval(mD)
        clearInterval(mR)
        clearInterval(mU)
    }
    if (event.keyCode==38){//Up
        snakeGoU();
        clearInterval(mD)
        clearInterval(mR)
        clearInterval(mL)
    }
})
var getfood=new Food;
function foodinfo() {
    var foods=document.querySelector('.food')
    foods.style.height='10px'
    foods.style.width='10px'
    foods.style.transform='translate('+getfood.locationX+'px, '+getfood.locationY+'px)'
    foods.style.backgroundColor='red'
}
getfood.whattoeat()
function Food() {
    this.spawnfood=function() {
        this.locationX=Math.floor(Math.random()*49)*10;
        this.locationY=Math.floor(Math.random()*49)*10;
        foodinfo();
    }
    this.whattoeat= function() {
        var nfod='<div class="food"></div>';
        canvas.insertAdjacentHTML('afterbegin',nfod);
        this.spawnfood();
    }
}

// setTimeout(fn, laikas ms=1000s;)
