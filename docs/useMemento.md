# ⌚`useMemento`

Manipulate past, present and future of states. Stores past values, allowing actions like _undo_ and _redo_, which inturn results in a useState that immulates Ctrl+z and Ctrl+y.

## Arguments

- `options? {object}`: Optional paramaters
  - `initial? {*}`: inital value, defualt ''
  - `fullState? {boolean}`: determens wether to return only present (false) or an object with three propertys: {array} past, {\*} present and {array} future, defualt false

## Returns

- _state_ {object}: Contains the present value of the state, can be modified to be an object with past, present and future as propertys by setting the property _fullState_ to true
  - _methods_ {object}: Contains five propertys/methods responsible for timeline management:
  - _undo_ {function}: Basicly a Ctrl+z. More detailed, sets the present value as the first element in future and the last element in past to the present value
  - _redo_ {function}: Basicly Ctrl+y. More detailed, set the present value as the last element in past and the first element in future to the present value
  - _set_ {function}: Sets the present value as the first element in past, the new value as present and clears future
  - _clear_ {function}: Clears all past, present and future by reseting to the inital state
  - _latest_ {function}: Basicly jumps to the last future value. More detailed, sets the last future element as the present value and everything before as elements of past

## Usage

```jsx
// ---------- Logic ---------- \\

import { useMemento } from "bjork_react-hookup";
import Memento from "./Memento";

const getEmolj = () => {
  const emoljs = ["🎥", "🎞", "📽", "🎬", "📺", "📷", "📸", "📹", "📼", "🔍"];
  return emoljs[Math.floor(Math.random() * 10)];
};

const MementoContainer = () => {
  const [state, methods] = useMemento({ fullState: true });

  return <Memento props={{ state, methods, getEmolj }} />;
};

// ---------- Visual ---------- \\

const Memento = ({
  props: {
    state,
    methods: { undo, redo, set, clear, latest },
    getEmolj,
  },
}) => (
  <>
    <p>Past: {state.past.join(", ")}</p>
    <p>Present: {state.present}</p>
    <p>Future: {state.future.join(" ")}</p>
    <button
      onClick={() => {
        set(getEmolj());
      }}
    >
      Add
    </button>
    <button onClick={undo}>Undo</button>
    <button onClick={redo}>Redo</button>
    <button onClick={clear}>Clear</button>
    <button onClick={latest}>Latest</button>
  </>
);
```
