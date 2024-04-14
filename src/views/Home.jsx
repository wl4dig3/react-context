import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";
import '../index.css';


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
  }, [])

  return (
    <div className="App">
      <h1>Natural Pic Wla</h1>
      <main className="gallery p-3 photo container-fotos">
      {
        fotos.length ?
        fotos.map( (fotito) => <Gallery key={fotito.id} {...fotito} /> )
        : 
        <p>... Cargando</p>
      }
      </main>
      
    </div>
  );
};
export default Home;
