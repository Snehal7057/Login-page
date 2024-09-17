const gameArea = document.getElementById('gameArea');
const startButton = document.getElementById('startButton');
let score = 0;

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.style.display = 'none';
  createBubble();
}

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 50 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.top = `${Math.random() * (gameArea.clientHeight - size)}px`;
  bubble.style.left = `${Math.random() * (gameArea.clientWidth - size)}px`;
  bubble.addEventListener('click', popBubble);
  gameArea.appendChild(bubble);
}

function popBubble() {
  score++;
  updateScore();
  this.remove();
  createBubble();
}

function updateScore() {
  gameArea.innerHTML = `<div id="score">Score: ${score}</div>`;
}
