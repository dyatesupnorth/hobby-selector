import { useState } from 'react';
import './App.css';
import data from "./hobbies.json"
function App() {
  const [randomHobby, setRandomHobby] = useState("");

  const generateHobby = () => {
    const allHobbies = data.categories.map(category => category.hobbies.map(hobby => hobby)).flat()
    setRandomHobby(allHobbies[Math.floor(Math.random() * allHobbies.length)])
  }

  return (
    <div className="App">
      <div>
        {randomHobby && <h1>Why Don't You Try: <strong>{randomHobby}</strong></h1>}
      </div>
      <button onClick={generateHobby}>{randomHobby ? "Maybe Not, Lets Try Something else" : "Find Me A New Hobby"}</button>
    </div>
  );
}

export default App;
