import React, { useEffect, useContext} from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import '../DoubleSlider/doubleSlider.scss';
import { FilterContext } from '../../../Context/FilterContext';


const DoubleSlider = () => {
  
  const {onAfterChange} = useContext(FilterContext)

  
  

  // const onChange = (value) => {
  //  console.log('onChange: ', value);
  // };

  

  return (
    <div className="container__slider">
      <label>Prix (100 000€ - 1 000 000€)</label>
      <Slider
        range
        step={10000}
        min={100000}
        max={1000000}
        defaultValue={[100000, 500000]}
        // onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};

export default DoubleSlider;
