import "./App.css";
import Click from "./components/useeffect/Click";
import Fetch from "./components/useeffect/Fetch";
// import Form from "./components/useref/Form";
// import Show from "./components/usestate/showtext/Show";
// import Counter from "./components/usestate/counter/Counter";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      {/* <Counter /> */}
      {/* <Show /> */}
      {/* <Form /> */}
      <Click />
      <Fetch />
    </div>
  );
}

export default App;
