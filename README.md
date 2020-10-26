# 🍻`React-hookup`
A React Hooks utility library containing costum hooks/data structures

## ⚙`Install`
Use npm to install react-hookup.
```bash
> npm i bjork_react-hookup
```

## 🔥`Usage`

```js
------------ // for example \\ ------------

import { useBoolean } from 'bjork_react-hookup'

const [ is, setIs, { toggle } ] = useBoolean(true)

------------ // or \\ ------------

import useBoolean from 'bjork_react-hookup/core/useBoolean'

const [ is, setIs, { toggle } ] = useBoolean(true)

```
<br>

## 🧰`Hook Documentation`

| Name                                                                                                          | Returns                                                              | Arguments                               |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------- |
| 📋[`useArray`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useArray.md)                   | [ array, setArray, methods ]                                         | ( initial )                             |
| ⏳[`useAsync`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useAsync.md)                   | [ state, execute ]                                                    | ( asyncFunction, immediate )            |
| 🎭[`useBoolean`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useBoolean.md)               | [ is, setIsByBoolean, methods ]                                      | ( initial )                             |
| 🏀[`useDebounce`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useDebounce.md)             | [ state, setStateByDebounce ]                                        | ( initial )                             |
| ⌨[`useField`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useField.md)                   | [ value, setValue, bind ]                                            | ( initial )                             |
| 🔦[`useFocus`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useFocus.md)                   | [ isFocus, bind ]                          |                                         |
| 👻[`useHover`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useHover.md)                   | [ isHover, bind ]                          |                                         |
| 📑[`useObject`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useObject.md)                 | [ object, setObject, methods ]                                       | ( initial )                             |
| 🖱[`useOnClickOutside`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useOnClickOutside.md) |                                                                      | ( ref, func )                           |
| 🤏[`useScreenType`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useScreenType.md)         | [ type ]                                   |                                         |
| 💾[`useStorage`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useStorage.md)               | [ item, setItem ]                                                    | ( type, key, initialValue )             |
| 🥁[`useThrottle`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useThrottle.md)             | [ state, setStateByThrottle ]                                        | ( initial )                             |
| ↕[`useWindowSize`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useWindowSize.md)         | [ size ]                                                              |                                         |
|🧭[`useWindowScroll`](https://github.com/EmilEinarsen/bjork_react-hookup/blob/main/docs/useWindowScroll.md)|[ coordiantes, setCoordinatesAndScrollTo ] 
|                                         |



## 👨‍💻`Contribution`
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>

## ⚖`Licence`
[MIT](https://github.com/EmilEinarsen/bjork_react-hookup/blob/master/LICENSE)












