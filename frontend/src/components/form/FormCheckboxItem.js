import React, { useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormCheckboxItem = ({ label, value, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange(e);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => handleChange(e)}
          name={value}
          color='primary'
        />
      }
      label={label}
    />
  );
};

export default FormCheckboxItem;
