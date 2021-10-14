//Task #0
const player1 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['W1', 'W2' ,'W3'],
    attack: function getMessage(name) {
        console.log(name + '' + 'Fight...');
    }
};

const player2 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['W1', 'W2' ,'W3'],
    attack: function getMessage(name) {
        console.log(name + '' + 'Fight...');
    }
};

//Task #1
function createPlayer() {
    const $player1 = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('div');

    $player1.classList.add('player1');

    
}

//createPlayer();
//Task #2