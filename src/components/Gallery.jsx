import { useContext } from "react";
import { MyContext } from "../MyContext";


// eslint-disable-next-line react/prop-types
const Gallery = ({src}) => {
  const {data, setData} = useContext(MyContext);
const handleChange = () => {
  setData([...data, src.medium ])
}

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <img src={src.medium} onClick={handleChange} />
    </div>
  );
};
export default Gallery;
