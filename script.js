const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

let color = 'red';
function setColor(c) { color = c; }

function drawTree() {
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(100, 300);
  ctx.lineTo(300, 300);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'brown';
  ctx.fillRect(180, 300, 40, 60);
}
drawTree();

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
});

function sendMessage() {
  const msgInput = document.getElementById('msgInput');
  const msgList = document.getElementById('msgList');
  if(msgInput.value.trim() !== ''){
    const li = document.createElement('li');
    li.textContent = msgInput.value;
    msgList.appendChild(li);
    msgInput.value = '';
  }
}
