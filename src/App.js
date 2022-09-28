import './App.css';
import { useState, useEffect  } from "react";

function App() {

  const [dog,setDog] = useState("");
  const [raza,setRaza] = useState("");
  const [randomColor,setRandomColor] = useState("");

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
      razaFromImageUrl(dog_image);
    });
  }

  function razaFromImageUrl(x) {
    let raza = x.split("https://images.dog.ceo/breeds/");
    raza = raza[1];
    raza = raza.split("/");
    raza = raza[0];
    setRaza(raza);

    let rColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    setRandomColor(rColor);
  }


  return (
    <div className="App">
      <br/>
      <button onClick={()=> verMascota()} className="btn btn-lg btn-primary" >Ver nueva mascota 🐶</button>

      <div className="bg_bones">
       <img width="400px" src={dog} />
      </div>
      
      <h2 style={{color: randomColor}}>{raza}</h2>
      <p className="color_url_file">File: {dog}</p>
    </div>
  );
}

export default App;
