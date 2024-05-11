import { useState } from "react";
import "./App.css";

const initialState = {
  username: "",
  name: "",
  age: "",
};
export default function App() {
  const [value, setValue] = useState(initialState);

  // const [value, setValue] = useState([]);
  const [display, setDisplay] = useState(false);
  function updateValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function HandleSubmit() {
    setDisplay(true);
  }

  // e.preventDefault();
  return (
    <div className="app">
      <form onSubmit={(e) => HandleSubmit(e.preventDefault())}>
        <label for="">Username</label>
        <input type="text" name="username" onChange={updateValue} />
        <label for="">Fullname</label>
        <input type="text" name="name" onChange={updateValue} />
        <label for="">Age</label>
        <input type="text" name="age" onChange={updateValue} />
        <button>Submit</button>

        {display && (
          <>
            <h3>Request sent to DB with below request data</h3>
            <ul>
              <li>Username:{value.username}</li>
              <li>name: {value.name}</li>
              <li>Age: {value.age}</li>
            </ul>
          </>
        )}
      </form>
    </div>
  );
}
