// eslint-disable-next-line react/prop-types
const Gallery = ({src}) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <img src={src.medium} />
    </div>
  );
};
export default Gallery;
