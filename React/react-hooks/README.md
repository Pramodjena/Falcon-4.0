## React Hooks :

- React hooks are functions that lets you use state and other features of react components.
- They enable you to manage state and handle side-effects.

```js
function evenOdd(num) {
  if (num % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
}
evenOdd(5); // call
```

- Hooks are functions that start with `use` keyword.
- `useState` is a hook that allows you to add state to functional components.
- `useEffect` is a hook that allows you to run some code after rendering.
- `useContext` is a hook that allows you to subscribe to React context without wrapping your component
- `useReducer` is a hook that is similar to `useState`, but it's used with
- `useCallback` is a hook that memoizes a function.
- `useMemo` is a hook that memoizes a value.
- `useRef` is a hook that creates a reference to a DOM node or a value of that.

## UseState Hook :

- useState is a hook that lets you add react state to functional componemts
- Syntax: const [name,setName] = useState("Pramod")
- const [variable/state, function: to cahnge the value] = useState("")
- By the help of function we can change/manipulate the value.
