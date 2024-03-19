import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function ToggleColor() {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <button
        style={{ background: `${color}` }}
        onClick={() => setColor(color === "blue" ? "grey" : "blue")}
      >
        Toggle Background
      </button>
    </div>
  );
}

function HideShowMessage() {
  const [toggleMessage, setToggleMessage] = useState("block");
  return (
    <div>
      <button
        onClick={() =>
          setToggleMessage(toggleMessage === "block" ? "none" : "block")
        }
      >
        {toggleMessage === "block" ? "Hide Message" : "Show Message"}
      </button>
      <p style={{ display: toggleMessage }}>This is Toggable message</p>
    </div>
  );
}

function ToggleTextColor() {
  const [textColor, setTextColor] = useState("green");
  return (
    <div>
      <button
        onClick={() => setTextColor(textColor === "green" ? "red" : "green")}
      >
        Toggle Color
      </button>
      <p style={{ color: textColor }}>Text Color Toggler</p>
    </div>
  );
}

function SelectFruit() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  const [selectedFruit, setSelectedFruit] = useState(null);

  const createList = fruits.map((fruit, index) => {
    return (
      <li style={{cursor: "pointer"}} key={index} onClick={() => setSelectedFruit(fruit)}>
        {fruit}
      </li>
    );
  });

  return (
    <div>
      <h2>select a Fruit</h2>
      <ul>{createList}</ul>
      <p>You Selected: {selectedFruit}</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Counter />
      <hr />
      <ToggleColor />
      <hr />
      <HideShowMessage />
      <hr />
      <ToggleTextColor />
      <hr/>
      <SelectFruit />
    </main>
  );
}
