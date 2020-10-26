# `useHover`

Manages detection of hover. Requires spreading the second param **bind** over the targeted element/component to function.

## Arguments

- `initial {*}`: Initial state

## Returns

- _isHover_ {boolean}: Contains the state, just like the first element of useState. Only exclusivly boolean
- _bind_ {object}: After spreading onto the targeted element, allows the useHover functionality

## Usage

```jsx
// ---------- Logic ---------- \\

import { useHover } from "bjork_react-hookup";
import Hover from "./Hover";

const HoverContainer = () => {
  const [isHover, bind] = useHover();

  return <Hover props={{ isHover, bind }} />;
};

// ---------- Visual ---------- \\

const style = {
  height: "50px",
  width: "50px",
  backgroundColor: "black",
  display: "grid",
  placeContent: "center",
};

const Hover = ({ props: { isHover, bind } }) => (
  <>
    <div {...bind} style={style}>
      {isHover ? "😁" : "☹️"}
    </div>
  </>
);
```
