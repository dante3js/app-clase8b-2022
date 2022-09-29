import './App.css';
import { useState, useEffect  } from "react";
import { Spinner } from 'reactstrap';
import SelectRaza from "./raza/SelectRaza";


function App() {

  const [dog,setDog] = useState("");
  const [loading,setLoading] = useState("");
  const [raza,setRaza] = useState("");
  const [randomColor,setRandomColor] = useState("");
  const [urlApi,setUrlApi] = useState("breeds/image");

  useEffect(() => {
    verMascota();
  }, [urlApi]);

  function verMascota() {
    setLoading(true);
    let url = `https://dog.ceo/api/${urlApi}/random`;
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(dog => {
      const dog_image = dog.message;
      setDog(dog_image);
      razaFromImageUrl(dog_image);
      setLoading(false);
    });
  }

  function razaFromImageUrl(x) {
    let raza = x.split("https://images.dog.ceo/breeds/");
    raza = raza[1];
    raza = raza.split("/");
    raza = raza[0];
    raza = raza.replace(/-/, ' ');
    setRaza(raza);

    let rColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    setRandomColor(rColor);
  }


  return (
    <div className="App">
      <br/>
      <SelectRaza urlApi={urlApi} setUrlApi={setUrlApi}></SelectRaza>

      <div className="btn_cambia">
        <button onClick={()=> verMascota()} className="btn btn-lg btn-primary" >Ver nueva mascota {urlApi!="breeds/image" && raza} 🐶</button>
      </div>
      <div className="bg_bones">
        {loading && (<div><Spinner type="border" color="success" /></div>)}
        <img width="400px" src={dog} />
      </div>

      <h2 style={{color: randomColor}}>{raza}</h2>
      <p className="color_url_file">File: {dog}</p>
    </div>
  );
}

export default App;
