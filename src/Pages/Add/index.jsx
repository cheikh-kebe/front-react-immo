import React from 'react';
import { useParams } from 'react-router';

const Add = () => {
  const { annonceSlug } = useParams();

  return (
    <div className="container__annonce">
      <h1>{annonceSlug}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit ad nihil fugiat vel fuga facilis exercitationem, sunt in illo reprehenderit id alias soluta blanditiis!</p>
    </div>
  );
};

export default Add;
