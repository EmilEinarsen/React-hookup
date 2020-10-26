# `useWindowScroll`

Listens for scroll and returns the coordinates

## Returns

- _coordinates_ {object}: Contains two propertys x {number} and y {number}. Each contains the scroll "position" by x, respectivly y.
- _setCoordinates_ {function}: Scrolls to and, therefor, sets the coordinates, the param needs to be an object with two propertys x and y

## Usage

```jsx
// ---------- Logic ---------- \\

import { useWindowScroll } from "bjork_react-hookup";
import WindowScroll from "./WindowScroll";

const WindowScrollContainer = () => {
  const [state] = useWindowScroll();

  return <WindowScroll props={{ state }} />;
};

// ---------- Visual ---------- \\

const style = {
  display: "block",
  backgroundColor: "black",
  color: "whitesmoke",
  padding: "20px",
  width: "250px",
  position: "fixed",
  top: "0",
  right: "0",
};

const WindowScroll = ({
  props: {
    state: { x, y },
  },
}) => (
  <div style={style}>
    Your scroll position is X:{Math.floor(x)}, Y:{Math.floor(y)}
  </div>
);
```
