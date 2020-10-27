# 🎭`useBoolean`

Manipulate and read a Boolean useState

## Arguments

- `initial {*}`: Initial state, will be converted to boolean

## Returns

_is_ {boolean}: Contains the state, just like the first element of useState, only exclusivly boolean

- _setIsByBoolean_ {function}: Sets the state, just like the second element of useState, converts any given value to a boolean
- _methods_ {object}: Contains three propertys useful for managing boolean state:
  - _toggle_ {function}: Toggles the state and updates
  - _setTrue_ {function}: Sets the state to true and updates
  - _setFalse_ {function}: Sets the state to false and updates

## Usage

```jsx
// ---------- Logic ---------- \\

import { useBoolean } from "bjork_react-hookup";
import Boolean from "./Boolean";

const BooleanContainer = () => {
  const [state, , { toggle, setTrue, setFalse }] = useBoolean(false);

  return <Boolean props={{ state, toggle, setTrue, setFalse }} />;
};

// ---------- Visual ---------- \\

const Boolean = ({ props: { state, toggle, setTrue, setFalse } }) => (
  <>
    <p>{state ? "😁" : "☹️"}</p>
    <button onClick={toggle}>TOGGLE</button>
    <button onClick={setTrue}>TRUE</button>
    <button onClick={setFalse}>FALSE</button>
  </>
);
```
