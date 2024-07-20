
const clickImage = document.getElementById('clickImage');
const counterDisplay = document.getElementById('counter');


let count = 0;


clickImage.addEventListener('click', function() {
  count++;
  counterDisplay.textContent = count;
});
