import React, { Fragment, useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormTextField from './FormTextField';
import FormDropDownField from './FormDropDownField';

const FormGovernanteFields = ({
  onChange,
  isErrorGovernante,
  isErrorConstituency,
  errorTextGovernante,
  errorTextConstituency
}) => {

  const [value, setValue] = useState('');
  const [governanteError, setGovernanteError] = useState(false);
  const [constituencyError, setConstituencyError] = useState(false);
  const [governanteHelperText, setGovernanteHelperText] = useState('');
  const [constituencyHelperText, setconstituencyHelperText] = useState('');

  const constituenciesNames = [
    'دائراة ١',
    'دائراة ٢',
    'دائراة ٣',
    'دائراة ٤',
    'دائراة ٥',
    'دائراة ٦',
    'دائراة ٧',
    'دائراة ٨',
    'دائراة ٩',
    'دائراة ١٠',
    'دائراة ١١',
    'دائراة ١٢',
    'دائراة ١٣',
    'دائراة ١٤',
    'دائراة ١٥',
    'دائراة ١٦',
    'دائراة ١٧',
  ]

  const governantes = {
    'بغداد': 17,
    'الأنبار': 4,
    'كركوك': 3,
    'نينوى': 8,
    'السلمانية': 5,
    'البصرة': 6,
    'ذي قار': 5,
    'ميسان': 3,
    'بابل': 4,
    'المثنى': 2,
    'واسط': 3,
    'الديوانية': 3,
    'كربلاء': 3,
    'النجف': 3,
    'ديالي': 4,
    'صلاح الدين': 3,
    'دهوك': 3,
    'أربيل': 4,
  }

  const [constituenciesData, setConstituenciesData] = useState([]);

  const handleGovernanteChange = (e) => {
    let c = constituenciesNames.slice(0, governantes[e.target.value]);
    setConstituenciesData(c);
    handleChange(e)
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);

    if (e.target.name === 'governante') {
      setGovernanteError(false)
      setGovernanteHelperText('')
    }

    if (e.target.name === 'constituency') {
      setConstituencyError(false)
      setconstituencyHelperText('')
    }
  };


  useEffect(() => {
    setGovernanteError(isErrorGovernante);
    if (isErrorGovernante) {
      setGovernanteHelperText(errorTextGovernante)
    } else {
      setGovernanteHelperText('')
    }
  }, [isErrorGovernante, errorTextGovernante])

  useEffect(() => {
    setConstituencyError(isErrorConstituency);
    if (isErrorConstituency) {
      setconstituencyHelperText(errorTextConstituency)
    } else {
      setconstituencyHelperText('')
    }
  }, [isErrorGovernante, errorTextGovernante])

  return (
    <Fragment>
      <FormDropDownField
        label='المحافظة التي تسكن(ين) فيها'
        name='governante'
        onChange={(e) => handleGovernanteChange(e)}
        errorText={errorTextGovernante}
        isError={isErrorGovernante}
      >
        <MenuItem value='بغداد'>بغداد</MenuItem>
        <MenuItem value='الأنبار'>الأنبار</MenuItem>
        <MenuItem value='كركوك'>كركوك</MenuItem>
        <MenuItem value='نينوى'>نينوى</MenuItem>
        <MenuItem value='السليمانية'>السلمانية</MenuItem>
        <MenuItem value='البصرة'>البصرة</MenuItem>
        <MenuItem value='ذي قار'>ذي قار</MenuItem>
        <MenuItem value='ميسان'>ميسان</MenuItem>
        <MenuItem value='بابل'>بابل</MenuItem>
        <MenuItem value='المثنى'>المثنى</MenuItem>
        <MenuItem value='واسط'>واسط</MenuItem>
        <MenuItem value='الديوانية'>الديوانية</MenuItem>
        <MenuItem value='كربلاء'>كربلاء</MenuItem>
        <MenuItem value='النجف'>النجف</MenuItem>
        <MenuItem value='ديالي'>ديالي</MenuItem>
        <MenuItem value='صلاح الدين'>صلاح الدين</MenuItem>
        <MenuItem value='دهوك'>دهوك</MenuItem>
        <MenuItem value='أربيل'>أربيل</MenuItem>
      </FormDropDownField>

      <FormDropDownField
        label='المحافظة التي تسكن(ين) فيها'
        name='constituency'
        onChange={(e) => handleChange(e)}
        errorText={errorTextConstituency}
        isError={isErrorConstituency}
      >
        {constituenciesData.map((c) => {
          return (
              <MenuItem key={c} value={c}>{c}</MenuItem>
          );
        })}
      </FormDropDownField>
    </Fragment>
  );
};

export default FormGovernanteFields;
