import { Furry } from './furry';
import { Carrot } from './carrot';
import { Fox } from './fox';


class Game {
    constructor(board, furry, carrot, score, index) {
        this.board = document.querySelectorAll('#board div');
        this.furry = new Furry();
        this.carrot = new Carrot();
        this.fox = new Fox();
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10);
        }

        var self = this;
    }

    hideVisibleFurry() {
        let hideFurry = document.querySelector(".furry");
        if (hideFurry !== null) {
            hideFurry.classList.remove('furry');
        }

    }

    hideVisibleFox() {
        let hideFox = document.querySelector(".fox");
        if (hideFox !== null) {
            hideFox.classList.remove('fox');
        }

    }

    showFurry() {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }

    showCarrot() {
        this.board[this.index(this.carrot.x, this.carrot.y)].classList.add('carrot');
    }

    showFox() {
        this.board[this.index(this.fox.x, this.fox.y)].classList.add('fox');
    }

    showFoxInterval() {
        this.foxInterval = setInterval(() => {
            // console.log(this.fox)
            setTimeout(() => {
                this.fox = new Fox();
                this.showFox();
            }, 0);

            setTimeout(() => this.hideVisibleFox(), 3500);
        }, 7000);
    }

    startGame() {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);
    }

    checkCarrotCollision() {
        if (this.furry.x === this.carrot.x && this.furry.y === this.carrot.y) {
            console.log("to samo miejsce");
            this.board[this.index(this.carrot.x, this.carrot.y)].classList.remove('carrot');
            this.score++;
            document.querySelector("#score strong").innerText = this.score;
            this.carrot = new Carrot();
            this.showCarrot();
        }
    }

    moveFurry() {

        if (this.furry.direction === "right") {
            this.furry.x += 1;
        } else if (this.furry.direction === "left") {
            this.furry.x -= 1;
        } else if (this.furry.direction === "up") {
            this.furry.y += 1;
        } else if (this.furry.direction === "down") {
            this.furry.y -= 1;
        }

        // this.gameOver();
        if (!this.gameOver()) {
            this.showFurry();
            this.checkCarrotCollision();

        }


    }

    turnFurry(event) {
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

    gameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9 || (this.furry.x === this.fox.x && this.furry.y === this.fox.y)) {
            console.log("ałt");
            clearInterval(this.idSetInterval);
            clearInterval(this.foxInterval);
            this.hideVisibleFurry();
            this.hideVisibleFox();
            var pre = document.querySelector('#over pre');
            pre.innerText = "Your score:" + this.score;
            over.classList.remove('invisible');
            document.querySelector('.carrot').classList.remove('carrot');
            return true;
        }
        else {
            return false;
        }
    }


}


export { Game }