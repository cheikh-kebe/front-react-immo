import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Divider } from 'antd';
import '../Checkboxes/checkboxes.scss';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Paris', 'Bordeaux', 'Marseille'];
const defaultCheckedList = [];

const Checkboxes = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="container__checkboxes">
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Toutes les villes
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default Checkboxes;
