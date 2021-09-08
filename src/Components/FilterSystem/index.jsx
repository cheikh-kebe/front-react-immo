import React, { useState } from 'react';
import '../FilterSystem/filterSystem.scss';
import Checkboxes from './Checkboxes';
import DoubleSlider from './DoubleSlider';

const FilterSystem = ({ allEstateToDisplay, setAllEstateToDisplay }) => {

  return (
    <div className="container__filterSystem">
      <DoubleSlider allEstateToDisplay={allEstateToDisplay} />
      <Checkboxes />
    </div>
  );
};

export default FilterSystem;
