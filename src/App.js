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
      <h4>{dog}</h4>
      <hr/>
      <img width="300px" src={dog} />
      <hr/>
      <button onClick={()=> verMascota()} className="btn btn-primary" >Ver nueva mascota</button>
    </div>
  );
}

export default App;
