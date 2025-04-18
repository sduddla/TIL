## 2025/04/18 (금)

<br>

### ✅ What I did

#### ❗️ 버튼을 클릭하면 숫자가 증가하도록 만들기

<br>

- 숫자를 저장할 `count` 변수를 선언하고, 초기값을 0으로 설정한다.

<br>

```js
let count = 0;
```

<br>

- 버튼을 클릭하면 `count` 값을 1 증가시키고, 그 값을 화면에 표시한다.

<br>

```js
btn.addEventListener('click', () => {
  count++;
  displayCount.innerText = `${count}`;
});
```

<br>
<br>
<br>

### ✅ What I Learned

- `let count = 0;` 으로 변수를 초기화하고, 버튼 클릭 이벤트를 통해 값을 1씩 증가시킬 수 있다.

- DOM 요소의 텍스트를 바꾸려면 `.innerText` 를 사용한다.

<br>
