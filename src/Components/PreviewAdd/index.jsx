import React from "react";
import '../PreviewAdd/previewAdd.scss';

const PreviewAdd = ({estate}) => {

  console.log(estate.image_path)
  return (
    <div className="container__add--preview">
      <div className="head--img">
        <img src={estate.image_path} alt="test" />
      </div>
      <div className="content--text">
        <div className="adress">
          <strong>{estate.title}</strong>
          <br/>
          {estate.description}
          <br/>
          <em>{estate.city}</em>
        </div>
        <div className="price">{estate.price}€</div>
      </div>
    </div>
  );
};

export default PreviewAdd;
