import { Game } from './game'

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('#start button').addEventListener('click', (e) => {

        document.querySelector('#start').classList.add('invisible');
        document.querySelector('#score').classList.remove('invisible');
        document.querySelector('#board').classList.remove('invisible');
        var game = new Game();
        game.showFurry();
        game.showCarrot();
        game.showFoxInterval();
        game.startGame();

        document.addEventListener('keydown', event => {
            game.turnFurry(event);
        });

    })

    document.querySelector('#over button').addEventListener('click', (e) => {
        this.score = 0;
        document.querySelector("#score strong").innerText = this.score;
        document.querySelector('#over').classList.add('invisible');
        var game = new Game();
        game.showFurry();
        game.showCarrot();
        game.showFoxInterval();
        game.startGame();

        document.addEventListener('keydown', event => {
            game.turnFurry(event);
        });

    })



})

