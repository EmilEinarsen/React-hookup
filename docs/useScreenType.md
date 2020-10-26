# 🤏`useScreenType`

Utilizes useWindowSize and matchMedia to return and object containing 5 propertys xs-xl, each can either be true or false. Each of the propertys breakpoints are based of [Material UI](https://material-ui.com/customization/breakpoints/)

## Returns

- _types_ {object}: contains 5 propertys, xs - xl. Each property can either be true or false, to represent a breakpoint

## Usage
```jsx
// ---------- Logic ---------- \\

import { useScreenType } from "bjork_react-hookup";
import ScreenType from "./ScreenType";

const ScreenTypeContainer = () => {
  const [type] = useScreenType();

  return <ScreenType props={{ type }} />;
};

// ---------- Visual ---------- \\

const style = {
  padding: "20px",
  backgroundColor: "black",
  color: "white",
  maxWidth: "220px",
};

const ScreenType = ({
  props: {
    type: { xs, sm, md, lg, xl },
  },
}) => (
  <div style={style}>
    <p>
      Size: {xl ? "xl" : lg ? "lg" : md ? "md" : sm ? "sm" : xs ? "xs" : ""}
    </p>
  </div>
);
```
