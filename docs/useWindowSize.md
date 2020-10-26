# `useWindowSize`

Listens for resize and returns the screen width and height

## Returns

- _size_ {object}: contains two propertys width {number} and height {number}

## Usage

inprogress...

```jsx
// ---------- Logic ---------- \\

import { useWindowSize } from "bjork_react-hookup";
import WindowSize from "./WindowSize";

const WindowSizeContainer = () => {
  const [size] = useWindowSize();

  return <WindowSize props={{ size }} />;
};

// ---------- Visual ---------- \\

const style = {
  padding: "20px",
  backgroundColor: "black",
  color: "white",
  maxWidth: "220px",
};

const WindowSize = ({
  props: {
    size: { width, height },
  },
}) => (
  <div style={style}>
    <p>
      Width: {width}px, Height: {height}px
    </p>
  </div>
);
```
