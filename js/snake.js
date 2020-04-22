const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const scoreText = document.getElementById('score');

const BOX = 32;
const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

//Background
const bg = new Image();
bg.src = './img/background.png';

//Snake
const snakeImg = new Image();
snakeImg.src = './img/snake.png';

//Food
const foodImg = new Image();
foodImg.src = './img/rabbit.png';

let score = 0;
let direction = '';

let foodSpawn = {
  x: Math.floor(Math.random() * 17 + 1) * BOX,
  y: Math.floor(Math.random() * 15 + 3) * BOX,
};

const snakeSpawn = [];

//First snake spawn
snakeSpawn[0] = {
  x: 9 * BOX,
  y: 10 * BOX,
};

document.addEventListener('keydown', move);

//Control
function move(event){
  const keyCode = event.code;
  if(keyCode === ARROW_DOWN && direction != ARROW_UP) {
    snakeSpawn[0].y += BOX
    direction = ARROW_DOWN;
  } else if(keyCode === ARROW_UP && direction != ARROW_DOWN) {
    snakeSpawn[0].y -= BOX;
    direction = ARROW_UP;
  } else if(keyCode === ARROW_LEFT && direction != ARROW_RIGHT) {
    snakeSpawn[0].x -= BOX;
    direction = ARROW_LEFT;
  }else if(keyCode === ARROW_RIGHT && direction != ARROW_LEFT) {
    snakeSpawn[0].x += BOX;
    direction = ARROW_RIGHT;
  }
}

//Audio
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

const eatSound = new sound('./audio/EatSound.ogg');
const dieSound = new sound('./audio/DieSound.ogg');

//Force reload
const forceReload = () => {
  clearInterval(game)
  location.reload(true)
  dieSound.stop()
}

let rX = 0;
let rY = 0;

//Rotate head snake
function rotateHead(direction = ARROW_DOWN, rX, rY) {
  ctx.save();
  ctx.translate(rX + BOX / 2, rY + BOX / 2);
  if(direction === ARROW_LEFT) {
    ctx.rotate(90 * Math.PI / 180)
  } else if(direction === ARROW_RIGHT) {
    ctx.rotate(-90 * Math.PI / 180)
  } else if(direction === ARROW_UP) {
    ctx.rotate( 180 * Math.PI / 180)
  } ctx.rotate( 0  / 180);
  ctx.drawImage(snakeImg, BOX / 2 * (-1), BOX / 2 * (-1), BOX, BOX);
  ctx.restore();
}

function drawGame() {
  let sc = 0;
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(foodImg, foodSpawn.x, foodSpawn.y );
  ctx.font = '30px Arial';
  (sc <= 0) ? ctx.fillText(`Score: ${score}`, BOX * 2.5, BOX * 1.6) : '';
  ctx.fillStyle = "#ECF4FF";

  for(let i = 0; i < snakeSpawn.length; i++) {
    rX = snakeSpawn[0].x;
    rY = snakeSpawn[0].y;
    sc = i
    rotateHead(direction, rX, rY);
    ctx.fillText(`Score: ${score}`, BOX * 2.5, BOX * 1.6);
    ctx.fillStyle = i === 0 ? 'transparent' : "#A0C432";

    // need modify this line because now sanke head push up transparent head box
    ctx.fillRect(snakeSpawn[i].x, snakeSpawn[i].y, BOX, BOX);
    ctx.fill();
  }

  let snakeX = snakeSpawn[0].x;
  let snakeY = snakeSpawn[0].y;

  if(snakeX == foodSpawn.x && snakeY == foodSpawn.y) {
    eatSound.play()
    score++;
    foodSpawn = {
      x: Math.floor(Math.random() * 17 + 1) * BOX,
      y: Math.floor(Math.random() * 15 + 3) * BOX,
    };
  } else {
    snakeSpawn.pop()
  }

  if( snakeX > 17 * BOX || snakeX < BOX ||
    snakeY > 17 * BOX || snakeY < 3 * BOX  ) {
    dieSound.play()
    const tryAgain = confirm(`Game Over, you score was ${score} click Ok to restart!`);
    tryAgain ? forceReload() : clearInterval(game)
  }

  if(direction === ARROW_DOWN) {
    snakeY += BOX
  } else if(direction === ARROW_UP) {
    snakeY -= BOX
  } else if(direction === ARROW_LEFT){
    snakeX -= BOX
  } else if(direction === ARROW_RIGHT) {
    snakeX += BOX
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snakeSpawn.unshift(newHead)
}
const game = setInterval(drawGame, 100);