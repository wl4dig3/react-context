import { useContext } from "react";
import { data } from "../MyContext";


const Favorites = () => {
const {data} = useContext(MyContext)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
          data.length ? data.map( (url, index) => <img key={index} src={url} /> ) 
          : <p>no hay fotos</p>
        }
      </div>
    </div>
  );
};
export default Favorites;
