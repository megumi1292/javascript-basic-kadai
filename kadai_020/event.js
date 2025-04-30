const message = document.getElementById('text');
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    message.textContent = 'ボタンをクリックしました';
  });