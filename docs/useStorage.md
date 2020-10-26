# 💾`useStorage`

Manages state and storage simultaneously. Choose between local, session and cookie.
Utilizes and therefor depends on bjork_useStorage. For more information check out [bjork_usestorage](https://github.com/EmilEinarsen/bjork_usestorage)

## Usage

```jsx
// ---------- Logic ---------- \\

import { useStorage } from "bjork_react-hookup";
import Storage from "./Storage";

const StorageContainer = () => {
  const [state, setState] = useStorage("local", "value");

  return <Storage props={{ state, setState }} />;
};

// ---------- Visual ---------- \\

const Storage = ({ props: { state, setState } }) => (
  <>
    <p>{!state ? "💀 Empty" : `😎 Stored : ${state}`}</p>
    <input onChange={(e) => setState(e.target.value)} value={state}></input>
  </>
);
```
