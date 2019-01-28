document.addEventListener("DOMContentLoaded", function () {
   
class Furry{
    constructor(x,y,direction){
    this.x = 0;
    this.y = 0;
    this.direction = "right";  
    }
}

class Coin{
    constructor(x,y){
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}

class Game{
    constructor(board, furry, coin, score, index){
        this.board = document.querySelectorAll('#board div');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function(x,y) {
            return x + (y * 10);
          }

        var self = this;
        }
        
        hideVisibleFurry(){
            let hideFurry = document.querySelector(".furry");
            if (hideFurry !== null){
                hideFurry.classList.remove('furry');
            }
            
             }

        showFurry(){
            this.hideVisibleFurry();
            this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
        }

        showCoin(){
            this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
        }

        startGame(){
            this.idSetInterval = setInterval(()=> {
                this.moveFurry();
              }, 250);
        }

        checkCoinCollision(){
            if (this.furry.x === this.coin.x && this.furry.y === this.coin.y){
                console.log("to samo miejsce");
                this.board[ this.index(this.coin.x,this.coin.y) ].classList.remove('coin');
                this.score ++;
                document.querySelector("#score strong").innerText = this.score;
                this.coin = new Coin();
                this.showCoin();
            }
        }

        moveFurry(){
            
            if(this.furry.direction === "right") {
                this.furry.x += 1;
            } else if ( this.furry.direction === "left" ){
                this.furry.x -=1;
            } else if (this.furry.direction === "up"){
                this.furry.y += 1;
            } else if (this.furry.direction === "down"){
                this.furry.y -= 1;
            }

            // this.gameOver();
            if (!this.gameOver()){
                this.showFurry();
                this.checkCoinCollision();
            }
            
            
        }

       
        

         turnFurry(event){
             console.log("Działą");
             console.log(event);
            switch (event.which) {
                case 37:
                  this.furry.direction = 'left';
                  break;
                case 38:
                  this.furry.direction = "down";
                  break;
                case 39:
                  this.furry.direction = "right";
                  break;
                case 40:
                  this.furry.direction = "up";
                  break;
            }
         }

         gameOver(){
             if( this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
                 console.log("ałt");
                 clearInterval(this.idSetInterval);
                 this.hideVisibleFurry();
                 var over = document.querySelector('#over');
                 var newPre = document.createElement('pre');
                 newPre.innerText = "Your score:" + this.score;
                 over.parentElement.appendChild(newPre)
                 over.classList.remove('invisible');
                 return true;
u             }
             else{
                 return false;
             }
         }

    
}


var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

document.addEventListener('keydown', event => {
    game.turnFurry(event);
});



})

// console.log(new Furry())
// console.log(new Coin())
// console.log(new Game())
