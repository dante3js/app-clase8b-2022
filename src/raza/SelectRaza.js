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
      let x1 =x[0].toUpperCase() + x.substr(1);
      return (
        <>
        {data1[x].length==0 && (<option value={value} >{x1}</option >)}

        {data1[x].length>0 &&
          data1[x].map((z) => {
            let value = `breed/${x}/${z}/images`;
            let x1 =x[0].toUpperCase() + x.substr(1);
            let z1 =z[0].toUpperCase() + z.substr(1);
            return (
              <option value={value} >
                {x1} {z1}
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

return (
    <>
      <select className="form-select" onChange={(e) => setUrlApi(e.target.value)} >
        <option value="breeds/image" >Todas las razas</option >
        {lists}
      </select>
    </>
  );

}
