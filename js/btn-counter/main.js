const btn = document.querySelector('.btn');
const displayCount = document.querySelector('.count');

let count = 0;

btn.addEventListener('click', () => {
  count++;
  displayCount.innerText = `${count}`;
});
