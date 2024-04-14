import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";


const Home = () => {
const [fotos, setFoto] = useState([]);
const PHOTO_URL = "../../public/photos.json";

  
  const getFotos = () => {
    return axios.get(PHOTO_URL)
    .then((resp) => { setFoto(resp.data.photos)
    })
  }
  useEffect( () => {
    getFotos() 
  })

  return (
    <div className="App">
      <h1>Natural Pic Wla</h1>
      <main>
      {
        fotos.length ?
        fotos.map( (fotito) => <Gallery key={fotito.id} {...fotito} /> )
        : 
        <p>No tenemos fotitos</p>
      }
      </main>
      
    </div>
  );
};
export default Home;
