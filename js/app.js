console.log('hello')

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
        this.board = document.querySelectorAll('#board div');;
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function(x,y) {
            return x + (y * 10);
          }
        }
        showFurry(){
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
        moveFurry(){
            if(this.furry.direction === "right") {
                this.furry.x = this.furry.x + 1;
            } else if ( this.furry.direction === "left" ){
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === "up"){
                this.furry.y += 1;
            } else if (this.furry.direction === "down"){
                this.furry.y -= 1;
            }

            this.showFurry()

        }
    
}

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame()

// console.log(new Furry())
// console.log(new Coin())
// console.log(new Game())