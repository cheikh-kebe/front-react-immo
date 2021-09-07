import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';

const DoubleSlider = () => {
  // const [adds, setAdds] = useState=([])

  const onChange = (value) => {
    console.log('onChange: ', value);
    // setValue API => UPDATE
  };

  return (
    <div className="container__slider">
      <Slider
        range
        step={10000}
        min={100000}
        max={1000000}
        defaultValue={[100000, 1000000]}
        onChange={onChange}
      />
    </div>
  );
};

export default DoubleSlider;
