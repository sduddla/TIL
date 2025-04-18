## 2025/04/18 (금)

<br>

### ✅ What I did

#### 1. tailwind로 버튼 UI 만들기

<br>

❗️ `App.tsx`

- `div` 로 감싸서 버튼들을 화면 가운데에 정렬
- 버튼 세 개 생성 (Add / Cancel / Success)
- 각 버튼에 `type`, `className`을 `props`로 전달해서 각각 다른 스타일 적용

<br>

```js
import Button from './components/Button';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <Button type="button" className="bg-[#4f4f4f]">
        Add
      </Button>
      <Button type="button" className="bg-[#ed4848]">
        Cancel
      </Button>
      <Button type="button" className="bg-[#7D48ED]">
        Success
      </Button>
    </div>
  );
}
```

<br>
<br>

❗️ `Buton.tsx`

<br>

1️⃣ `App.tsx` 에서 넘긴 `type` , `className` , `children` 를 Button 컴포넌트에서 그대로 구조 분해해 사용

<br>

```js
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button({ children, type, className }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        className={twMerge(
          'w-[200px] h-[100px] text-white cursor-pointer text-sm rounded-lg',
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
```

<br>
<br>

2️⃣ `App.tsx` 에서 넘긴 모든 `props` 를 받아서 `children` , `className` 만 꺼내고 나머지는 `...rest` 로 `button` 요소에 그대로 전달

<br>

```js
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          'w-[200px] h-[100px] text-white cursor-pointer text-sm rounded-lg',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
```

<br>
<br>
<br>

### ✅ What I Learned

- `props` 받는 방법에 두 가지 방식이 있다는 것을 알게 되었다.

<br>

- `React.ComponentPropsWithoutRef<'button'>`
  - HTML `button` 요소가 원래 갖고 있는 속성과 이벤트를 타입으로 가져온다.

<br>
