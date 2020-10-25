# `useAsync`
useAsync reduces littering in your component by abstracting logic and management of multiple states.

## Arguments
- `ref {element}`: ref to the targeted element/component
- `offset {number}`: offset for when the targeted element/component is considerd to be in view, defualt 0

## Returns
* _isInView_ {boolean}: Contains the state, just like the first element of useState. Only depends on if the provided element is "in view" by the Y-axis
* _setInViewByScrollTo_ {function}: Sets the state, just like the second element of useState, only does this without any additonall params throught _ref_. Inadditon, scrolls the element into view
