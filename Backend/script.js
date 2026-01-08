const input = document.getElementById('myInput');
const button = document.getElementById('myButton');
const label = document.getElementById('myLabel');
const msg = document.getElementById('msg');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    label.textContent = 'Label: ' + text;
    msg.textContent = 'Button wurde geklickt.';
  } else {
    msg.textContent = 'Bitte etwas eingeben.';
  }
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});
