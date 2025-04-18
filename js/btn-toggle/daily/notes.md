## 2025/04/18 (금)

<br>

### ✅ What I did

#### 1. 버튼 클릭 시, 버튼 배경 색 변경

- 버튼 기본 색상 -> `pink`

- 버튼 클릭하면 -> `skyblue` 로 배경색 변경

<br>

```js
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  btn.style.backgroundColor = 'skyblue';
});
```

<br>
<br>

#### 2. 버튼 클릭할 때마다 색 번갈아 가며 바뀌도록 구현

- 초기 상태 -> `pink`

- 버튼 클릭 시 `skyblue` 로 변경, 다시 클릭 시 `pink` 로 돌아온다.

- 상태 토글을 위해 boolean 값을 `true <-> false` 로 반전

<br>

```js
const btn = document.getElementById('btn');

let colorPink = true;

btn.addEventListener('click', () => {
  if (colorPink) {
    btn.style.backgroundColor = 'skyblue';
  } else {
    btn.style.backgroundColor = 'pink';
  }
  colorPink = !colorPink;
});
```

<br>
<br>

#### 3. 버튼 텍스트 색 변경

- 버튼 배경 색 `skyblue` -> 텍스트 색 `white`

- 버튼 배경 색 `pink` -> 텍스트 색 `white`

<br>

```js
btn.style.color = 'white';
```

<br>
<br>

#### 4. 버튼 텍스트 내용 변경

- 버튼 배경 색 `skyblue` -> 텍스트 내용 `스카이블루` 로 변경

- 버튼 배경 색 `pink` -> 텍스트 내용 `핑크` 로 변경

<br>

```js
const btnText = document.querySelector('input[type="button"]');
```

```js
btnText.value = '스카이블루';
btnText.value = '핑크';
```

- `<input type="button">` 은 내부에 텍스트가 없고, value 속성이 버튼의 레이블 역할을 한다.

- 그래서, JS에서도 `.innerText` 말고 `.value` 로 바꿔야 한다.

- `querySelecotr` 로 선택한 변수에 `.value = "새 텍스트"` 하면 잘 바뀌게 된다.

<br>
<br>
<br>

### ✅ What I Learned

- add.EventListener
  - 클릭 이벤트 등록하는 메서드

<br>

- style.backgroundColor
  - 요소의 배경색을 JS에서 직접 변경

<br>

- boolean toggle
  - `colorPink = !colorPink;` 로 true/false 전환

<br>

- style.color
  - 요소의 텍스트색을 JS에서 직접 변경

<br>

- `input` 타입의 버튼
  - `.value` 사용하여 텍스트 내용 변경

<br>

- `Button` 태그
  - `.innerText` 사용하여 텍스트 내용 변경

<br>
