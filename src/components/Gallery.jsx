// eslint-disable-next-line react/prop-types
const Gallery = ({src}) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="gallery grid-columns-5 p-3">
      <img src={src.medium} />
    </div>
  );
};
export default Gallery;
