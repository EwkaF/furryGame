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
    constructor(board, furry, coin, score){
        this.board = document.getElementById("board");
        this.furry = new Furry;
        this.coin = new Coin;
        this.score = 0;
    }
}