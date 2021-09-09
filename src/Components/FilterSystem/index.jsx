import React, { useState } from 'react';
import '../FilterSystem/filterSystem.scss';
import Checkboxes from './Checkboxes';
import DoubleSlider from './DoubleSlider';

const FilterSystem = () => {

  return (
    <div className="container__filterSystem">
      <DoubleSlider />
      <Checkboxes />
    </div>
  );
};

export default FilterSystem;
