# 🏀`useDebounce`

Functions like useState, but with an built-in debounce

## Arguments

- `initial {*}`: Initial state

## Returns

- _state_ {\*}: Contains the value of the state, just like the first element of useState.
- _setStateByDebounce_ {function}: Sets the state, just like the second element of useState. Delays execution of setState until idle for duration of _delay_

## Usage

```jsx
// ---------- Logic ---------- \\

import { useDebounce } from "bjork_react-hookup";
import Debounce from "./Debounce";

const DebounceContainer = () => {
  const [count, setCount] = useDebounce(0);
  const [clicked, setClicked] = useState(0);

  return <Debounce props={{ count, setCount, clicked, setClicked }} />;
};

// ---------- Visual ---------- \\

const Debounce = ({ props: { count, setCount, clicked, setClicked } }) => (
  <>
    <p>
      I'm {count}, but clicked {clicked}
    </p>
    <button
      onClick={() => {
        setCount(++count, 1000);
        setClicked(++clicked);
      }}
    >
      Debounce
    </button>
  </>
);
```
