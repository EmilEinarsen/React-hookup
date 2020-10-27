# 💡`useActive`

Manages detection of active. Requires spreading the second param **bind** over the targeted element to function.

## Returns

- _isActive_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
- _bind_ {object}: After spreading onto the targeted element, allows the useActive functionality

## Usage

```jsx
// ---------- Logic ---------- \\

import { useActive } from "bjork_react-hookup";
import Active from "./Active";

const ActiveContainer = () => {
  const [isActive, bind] = useActive();

  return <Active props={{ isActive, bind }} />;
};

// ---------- Visual ---------- \\

const style = {
  height: "50px",
  width: "50px",
  backgroundColor: "black",
  display: "grid",
  placeContent: "center",
};

const Active = ({ props: { isActive, bind } }) => (
  <div {...bind} style={style}>
    {isActive ? "😁" : "☹️"}
  </div>
);
```
