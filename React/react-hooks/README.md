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

## UseRef Hook :

- useRef is a hook that allows you to persist values between renders.
- Unlike state, changing a useref value does not cause a re-render.
- useref returns a mutuable ref object with a .current property.
- Syntax: const ref = useRef(null)
- It is used to access DOM nodes or elements.
- It is also used to store values that don't trigger a re-render.
- It is used to create a reference to a DOM node or a value that persists across re-render.

## UseEffect Hook :

- useEffect is a hook that lets you run some code after rendering.
- Syntax: useEffect(() => { code to run after render }, [dependencies]).
- useEffect takes two arguments: a function to run after render, and an optional array of dependencies.
- If the dependencies array is empty, the effect will only run once after the initial render.
- If the dependencies array is not empty, the effect will run after every render where the dependencies have
  changed.
- useEffect is used to handle side effects, such as making API calls, setting timers, updating the
  DOM, and more.
- useEffect is used to handle cleanup, such as removing event listeners, clearing timers, and more.
- useEffect is used to handle async operations, such as fetching data from an API.
- useEffect is used to handle DOM mutations, such as updating the DOM, adding event listeners, and
  more.
- useEffect is used to handle subscriptions, such as subscribing to a WebSocket, and more.
- useEffect is used to handle errors, such as catching errors, and more.
- useEffect is used to handle optimization, such as memoizing values, and more.
- useEffect is used to handle debugging, such as logging values, and more.
