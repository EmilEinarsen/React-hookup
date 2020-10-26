# `useField`

Manages basic manipulation and controll of field. Requires spreading the third param **bind** over targeted field to function.

## Arguments

- `initial {*}`: Initial state

## Returns

- _value_ {boolean}: Contains the state, just like the first element of useState. Depends on the value of the targeted field
- _setValue_ {function}: Sets the state, just like the second element of useState. Controlls the value of the targeted field
- _bind_ {object}: After spreading onto the targeted element/field, allows the useField functionality

## Usage

```jsx
// ---------- Logic ---------- \\

import { useField } from "bjork_react-hookup";
import Field from "./Field";

const FieldContainer = () => {
  const [state, , bind] = useField();

  return <Field props={{ state, bind }} />;
};

// ---------- Visual ---------- \\

const Field = ({ props: { state, bind } }) => (
  <>
    <p>{!state ? "💀 Empty" : `😎 Value: ${state}`}</p>
    <input {...bind}></input>
  </>
);
```
