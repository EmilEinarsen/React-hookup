# What is this?
A React Hooks utility library containing costum hooks/data structures

## Install
Use npm to install react-hookup.
```bash
> npm i bjork_react-hookup
```

## Usage

```js
------------ // for example \\\\ ------------

import { useBoolean } from 'bjork_react-hookup'

const [ is, setIs, { toggle } ] = useBoolean(true)

------------ // or \\\\ ------------

import useBoolean from 'bjork_react-hookup/core/useBoolean'

const [ is, setIs, { toggle } ] = useBoolean(true)

```
<br>

## Hook Documentation

| Name                                    | Returns                                    | Arguments                               |
| --------------------------------------- | ------------------------------------------ | --------------------------------------- |
| [`useArray`]()                          | [ array, setArray, methods ]               | ( initial )                             |
| [`useAsync`]()                          | [ state, execute ]                         | ( asyncFunction, immediate )            |
| [`useBoolean`]()                        | [ is, setIsByBoolean, methods ]            | ( initial )                             |
| [`useDebounce`]()                       | [ state, setStateByDebounce ]              | ( initial )                             |
| [`useField`]()                          | [ value, setValue, bind ]                  | ( initial )                             |
| [`useFocus`]()                          | [ isFocus, bind ]                          |                                         |
| [`useHover`]()                          | [ isHover, bind ]                          |                                         |
| [`useInView`]()                         | [ isInView, setInViewByScrollTo ]          | ( ref, offset )                         |
| [`useObject`]()                         | [ object, setObject, methods ]             | ( initial )                             |
| [`useOnClickOutside`]()                 |                                            | ( ref, func )                           |
| [`useScreenType`]()                     | [ type ]                                   |                                         |
| [`useStorage`]()                        | [ item, setItem ]                          | ( type, key, initialValue )             |
| [`useThrottle`]()                       | [ state, setStateByThrottle ]              | ( initial )                             |
| [`useWindowScroll`]()                   | [ coordiantes, setCoordinatesAndScrollTo ] |                                         |
| [`useWindowSize`]()                     | [ size ]                                   |                                         |


## Contribution
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>

## Licence
[MIT](https://github.com/EmilEinarsen/bjork_react-hookup/blob/master/LICENSE)












