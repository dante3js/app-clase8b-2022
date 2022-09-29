import React, { useState, useEffect } from 'react';

export default function SelectRaza({urlApi,setUrlApi}) {

  const [lists, setLists] = useState("");

  useEffect(() => {

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => {
    return response.json()
  })
  .then(data => {
    const data1 = data.message;

    let listado =  Object.keys(data1).map((x) => {
      let value = `breed/${x}/images`;
      return (
        <>
        {data1[x].length==0 && (<option value={value} >{x}</option >)}

        {data1[x].length>0 &&
          data1[x].map((z) => {
            let value = `breed/${x}/${z}/images`;
            return (
              <option value={value} >
                {x}-{z}
              </option >
            )
          })
        }
        </>
      )
    })

    setLists(listado);
  });

}, []);


  function verRaza() {
    let url = document.getElementById("selector_raza").value;
    setUrlApi(url);
  }


  return (
    <>
      <select className="form-select" id="selector_raza"  onChange={()=> verRaza()} >
        <option value="breeds/image" >Todas las razas</option >
        {lists}
      </select>
    </>
  );

}
