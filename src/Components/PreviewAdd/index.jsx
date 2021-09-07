import React from "react";
import '../PreviewAdd/previewAdd.scss';

const PreviewAdd = ({estate}) => {
  return (
    <div className="container__add--preview">
      <div className="head--img">
        <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
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
