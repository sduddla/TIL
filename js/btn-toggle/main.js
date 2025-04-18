const btn = document.getElementById('btn');
const btnText = document.querySelector('input[type="button"]');

let colorPink = true;

btn.addEventListener('click', () => {
  if (colorPink) {
    btn.style.backgroundColor = 'skyblue';
    btnText.value = '스카이블루';
    btn.style.color = 'white';
  } else {
    btn.style.backgroundColor = 'pink';
    btnText.value = '핑크';
    btn.style.color = 'white';
  }
  colorPink = !colorPink;
});

// 만약 HTML에서 버튼을 <Button></Button> 으로 했다면, btn.innerText 로 텍스트 변경해주면 된다.
