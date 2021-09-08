import React, { useState, useEffect, useCallback } from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import '../DoubleSlider/doubleSlider.scss';

const DoubleSlider = ({ allEstateToDisplay }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    setAds(allEstateToDisplay);
  }, [allEstateToDisplay]);

  const onChange = (value) => {
   // console.log('onChange: ', value);
  };

  const onAfterChange = useCallback(value => {
    setAds(allEstateToDisplay);
    console.log('onAfterChange: ', value);
    setAds(ads => ads.filter((estate) => estate.price >= value[0] && estate.price <= value[1]));
    console.log(ads);
  }, [ads])

  return (
    <div className="container__slider">
      <label>Prix (100 000€ - 1 000 000€)</label>
      <Slider
        range
        step={10000}
        min={100000}
        max={1000000}
        defaultValue={[100000, 500000]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};

export default DoubleSlider;
