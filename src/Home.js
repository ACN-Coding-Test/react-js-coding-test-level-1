import "./App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const [isReady, setIsReady] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setText(e.target.value);
    validate();
  }

  const validate = () => {
    const msg = text + '!'
    if (msg !== "Ready!") {
      setIsReady(false);
    } else {
      setIsReady(true)
      setText("");
    }
  }

  const redirect = () => {
    history.push('/pokedex');
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/pokedex">
          <img
            hidden={!isReady}
            src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
            className="App-logo"
            alt="logo"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={redirect}
          />
        </NavLink>
        <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b>
        <p>Are you ready to be a pokemon master?</p>
        <input type="text" name="name" value={text} onChange={handleChange} />
        {!isReady && <span style={{ color: "red" }}>I am not ready yet!</span>}
      </header>
    </div>
  );
}

export default Home;
