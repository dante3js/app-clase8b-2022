import './App.css';
import { useState, useEffect  } from "react";

function App() {

  const [dog,setDog] = useState("");

  useEffect(() => {
    verMascota();
  }, []);

  function verMascota() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      return response.json()
    })
    .then(dog => {
      const dog_image = dog.message;
      setDog(dog_image);
    });
  }

  return (
    <div className="App">
      <br/>
      <button onClick={()=> verMascota()} className="btn btn-lg btn-primary" >Ver nueva mascota 🐶</button>
      <hr/>
      <img width="400px" src={dog} />
      <hr/>
      <p>File: {dog}</p>
    </div>
  );
}

export default App;
