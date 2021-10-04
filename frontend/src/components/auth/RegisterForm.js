import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import FormTextField from '../form/FormTextField';
import FormDropDownField from '../form/FormDropDownField';
import FormDateField from '../form/FormDateField';
import FormSubmitButton from '../form/FormSubmitButton';
import FormGovernanteFields from '../form/FormGovernanteFields';
import FormUploadField from '../form/FormUploadField';
import SponsorsLogos from '../logos/SponsorsLogos';
import Alert from '../layout/Alert';

import { setAlert, removeAllAlerts } from '../../actions/alert';
import { registerObserver } from '../../actions/observer';

import moment from 'moment';

import validator from 'validator';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    margin: theme.spacing(2, 0, 0, 0),
  },
  logos: {
    margin: theme.spacing(2, 5, 4, 5),
  },
  alert: {
    width: '100%',
    margin: theme.spacing(0, 5, 0, 5),
  },
}));

const RegisterForm = ({
  registerObserver,
  observer,
  setAlert,
  removeAllAlerts,
}) => {
  const classes = useStyles();

  useEffect(() => {
    removeAllAlerts();
  }, [removeAllAlerts]);

  const [maxDate, setMaxDate] = useState(new Date());

  const [formData, setFormData] = useState({
    electoralNumber: '',
    firstName: '',
    fatherName: '',
    grandfatherName: '',
    familyNumber: '',
    sex: '',
    dateOfBirth: '',
    firstPhoneNumber: '',
    secondPhoneNumber: '',
    email: '',
    governante: '',
    constituency: '',
    didYouMonitorBefore: '',
    doYouHaveSmartphone: '',
    whichAppsDoYouUse: '',
    howIsTheConnection: '',
    availableForTraining: '',
    availableForRemoteTraining: '',
    availableForObserving: '',
    personalPicture: '',
    nationalIdPicture: '',
    nationalIdBackPicture: '',
    residencyPicture: '',
    rationPicture: '',
  });

  const {
    electoralNumber,
    firstName,
    fatherName,
    grandfatherName,
    familyNumber,
    sex,
    dateOfBirth,
    firstPhoneNumber,
    secondPhoneNumber,
    email,
    governante,
    constituency,
    didYouMonitorBefore,
    doYouHaveSmartphone,
    whichAppsDoYouUse,
    howIsTheConnection,
    availableForTraining,
    availableForRemoteTraining,
    availableForObserving,
    personalPicture,
    nationalIdPicture,
    nationalIdBackPicture,
    residencyPicture,
    rationPicture,
  } = formData;

  const newErrors = {};
  for (const s in formData) {
    newErrors[s] = false;
  }
  const [errors, setErrors] = useState(newErrors);

  const onChange = (e) => {
    setErrors({ ...errors, [e.target.name]: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files.length > 0) {
      //setErrors({ ...errors, [e.target.name]: false });
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  }


  const onSubmit = async (e) => {
    e.preventDefault();

    var isAnyErrors = false;
    var newErrors = { ...errors };

    for (const err in errors) {
      if (formData[err] === '') {
        if (err !== "secondPhoneNumber" && err !== 'familyNumber' &&
            err !== "personalPicture" && err !== "nationalIdPicture" && err !== "nationalIdBackPicture" && 
            err !== "residencyPicture" && err !== "rationPicture") {
          isAnyErrors = true;
          newErrors[err] = true;
        } 
      } else {
        newErrors[err] = false;
      }
    }

    if (dateOfBirth === '') {
      isAnyErrors = true;
      setMaxDate(new Date(moment().subtract(18, 'years')));
    }

    if (!validator.isEmail(email)) {
      isAnyErrors = true;
      newErrors.email = true;
    }

    if (!validator.isInt(firstPhoneNumber)) {
      isAnyErrors = true;
      newErrors.firstPhoneNumber = true;
    }

    if (!validator.isInt(electoralNumber)) {
      isAnyErrors = true;
      newErrors.nationalNumber = true;
    }

    if (electoralNumber.length !== 8) {
      isAnyErrors = true;
      newErrors.electoralNumber = true;
    }

    if (firstPhoneNumber.length !== 11) {
      isAnyErrors = true;
      newErrors.firstPhoneNumber = true;
    }

    if (firstPhoneNumber.length > 2) {
      if (firstPhoneNumber[0] !== '0' && firstPhoneNumber[1] !== '7') {
          isAnyErrors = true;
          newErrors.firstPhoneNumber = true;
      }
    }

    if (isAnyErrors) {
      setErrors(newErrors);
      setAlert('الرجاء إدخال معلومات صحيحة', 'error');
    } else {
      registerObserver({
        electoralNumber,
        firstName,
        fatherName,
        grandfatherName,
        familyNumber,
        sex,
        dateOfBirth,
        firstPhoneNumber,
        secondPhoneNumber,
        email,
        governante,
        constituency,
        didYouMonitorBefore,
        doYouHaveSmartphone,
        whichAppsDoYouUse,
        howIsTheConnection,
        availableForTraining,
        availableForRemoteTraining,
        availableForObserving,
        personalPicture,
        nationalIdPicture,
        nationalIdBackPicture,
        residencyPicture,
        rationPicture,
      });
    }
  };

  if (observer.waiting) {
    return <Redirect to='/register/waiting' />;
  }

  return (
    <Fragment>
      <Grid container justify='center'>
        <Grid item xs={12} md={6}>
          <Grid container justify='center'>
            <Typography className={classes.title} color='primary'>
              تسجيل المراقبين والمراقبات
            </Typography>
          </Grid>

          <form onSubmit={(e) => onSubmit(e)}>

            <FormTextField
              label='رقم الناخب(ـة):*'
              placeholder='رقم الناخب(ـة)'
              name='electoralNumber'
              onChange={onChange}
              isError={errors.electoralNumber}
              errorText='الرجاء تعبئة خانة رقم الناخب(ـة)'
            />

            <FormTextField
              label='الاسم الأول:*'
              placeholder='الاسم الأول'
              name='firstName'
              onChange={onChange}
              isError={errors.firstName}
              errorText='الرجاء تعبئة خانة الاسم الأول'
            />

            <FormTextField
              label='اسم الأب:*'
              placeholder='اسم الأب'
              name='fatherName'
              onChange={onChange}
              isError={errors.fatherName}
              errorText='الرجاء تعبئة خانة اسم الأب'
            />

            <FormTextField
              label='اسم الجد:*'
              placeholder='اسم الجد'
              name='grandfatherName'
              onChange={onChange}
              isError={errors.grandfatherName}
              errorText='الرجاء تعبئة خانة اسم الجد'
            />

            <FormTextField
              label='رقم العائلة:'
              placeholder='رقم العائلة'
              name='familyNumber'
              onChange={onChange}
              isError={errors.familyNumber}
              errorText='الرجاء تعبئة خانة رقم العائلة'
            />

            <FormDropDownField
              label='الجنس:*'
              name='sex'
              onChange={onChange}
              errorText='الرجاء اختيار الجنس'
              isError={errors.sex}
            >
              <MenuItem value='ذكر'>ذكر</MenuItem>
              <MenuItem value='أنثى'>أنثى</MenuItem>
            </FormDropDownField>

            <FormDateField
              label='تاريخ الميلاد:*'
              name='dateOfBirth'
              onChange={onChange}
              errorText='الرجاء اختيار تاريخ ميلاد صحيح'
              maxDateError={maxDate}
            />

            <FormTextField
              label='رقم الهاتف ١:*'
              placeholder='رقم الهاتف ١'
              name='firstPhoneNumber'
              onChange={onChange}
              isError={errors.firstPhoneNumber}
              errorText='الرجاء تعبئة خانة رقم الهاتف'
            />

            <FormTextField
              label='رقم الهاتف ٢:'
              placeholder='رقم الهاتف ٢'
              name='secondPhoneNumber'
              onChange={onChange}
              isError={errors.secondPhoneNumber}
              errorText='الرجاء تعبئة خانة رقم الهاتف'
            />

            <FormTextField
              label='البريدالإلكتروني:*'
              placeholder='البريد الإلكتروني'
              name='email'
              onChange={onChange}
              isError={errors.email}
              errorText='الرجاء تعبئة خانة البريد الإلكتروني'
            />

            <FormGovernanteFields
              isErrorGovernante={errors.governante}
              isErrorConstituency={errors.constituency}
              errorTextGovernante='الرجاء اختيار المحافظة'
              errorTextConstituency='الرجاء اختيار الدائرة الانتخابية'
              onChange={onChange}
            ></FormGovernanteFields>

            <FormDropDownField
              label='هل سبق وأن راقبت الانتخابات من قبل؟*'
              name='didYouMonitorBefore'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.didYouMonitorBefore}
            >
              <MenuItem value='نعم مع منظمة تموز'>نعم مع منظمة تموز</MenuItem>
              <MenuItem value='نعم مع جهة رقابية أخرى'>نعم مع جهة رقابية أخرى</MenuItem>
              <MenuItem value='نعم عملت مع مفوضية الانتخابات'>نعم عملت مع مفوضية الانتخابات</MenuItem>
              <MenuItem value='لا'>لا</MenuItem>
            </FormDropDownField>

            <FormDropDownField
              label='هل لديك هاتف محمول ذكي؟*'
              name='doYouHaveSmartphone'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.doYouHaveSmartphone}
            >
              <MenuItem value='نعم - أيفون'>نعم - أيفون</MenuItem>
              <MenuItem value='نعم - أندرويد'>نعم - أندرويد</MenuItem>
              <MenuItem value='لا'>لا</MenuItem>
            </FormDropDownField>

            <FormDropDownField
              label='ما هي تطبيقات المراسلة التي يتم استخدمها بشكل عام؟*'
              name='whichAppsDoYouUse'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.whichAppsDoYouUse}
            >
              <MenuItem value='الواتساب'>الواتساب</MenuItem>
              <MenuItem value='تيليجرام'>تيليجرام</MenuItem>
              <MenuItem value='الواتساب وتيليجرام'>الواتساب وتيليجرام</MenuItem>
              <MenuItem value='لا استخدم أي تطبيقات'>لا استخدم أي تطبيقات</MenuItem>
              <MenuItem value='لا يتوفر لدي هاتف ذكي'>لا يتوفر لدي هاتف ذكي</MenuItem>
            </FormDropDownField>

            <FormDropDownField
              label='كيف تقيم(ين) تغطية الإنترنت وشبكة المحمول في منطقتك؟*'
              name='howIsTheConnection'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.howIsTheConnection}
            >
              <MenuItem value='ممتازة'>ممتازة</MenuItem>
              <MenuItem value='جيدة'>جيدة</MenuItem>
              <MenuItem value='ضعيفة'>ضعيفة</MenuItem>
              <MenuItem value='لا يوجد تغطية'>لا يوجد تغطية</MenuItem>
            </FormDropDownField>

            <FormDropDownField
              label='هل أنت على استعداد لحضور جلسة تدريبية فعلية عن مراقبة الانتخابات مع منظمة تموز؟*'
              name='availableForTraining'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.availableForTraining}
            >
              <MenuItem value='نعم'>نعم</MenuItem>
              <MenuItem value='لا'>لا</MenuItem>
            </FormDropDownField>

            <FormDropDownField
              label='هل أنت على استعداد لحضور جلسة تدريبية عن مراقبة الانتخابات مع منظمة تموز عبر الإنترنت؟*'
              name='availableForRemoteTraining'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.availableForRemoteTraining}
            >
              <MenuItem value='نعم'>نعم</MenuItem>
              <MenuItem value='لا'>لا</MenuItem>
            </FormDropDownField>

            <FormDropDownField
              label='هل أنت على استعداد لمراقبة يوم الاقتراع والحضور من الساعة ٦ صباحاً ولغاية انتهاء العد والفرز؟*'
              name='availableForObserving'
              onChange={onChange}
              errorText='الرجاء اختيار أحد الخيارات'
              isError={errors.availableForObserving}
            >
              <MenuItem value='نعم'>نعم</MenuItem>
              <MenuItem value='لا'>لا</MenuItem>
            </FormDropDownField>

            <FormUploadField
              label="صورة شخصية (صورة معاملات):"
              name='personalPicture'
              onChange={onImageChange}
              isError={errors.personalPicture}
              errorText='الرجاء تحميل الصورة الشخصية'
            ></FormUploadField>

            <FormUploadField
              label="صورة عن هوية الأحوال المدنية أو البطاقة الوطنية - صورة أمامية:"
              name='nationalIdPicture'
              onChange={onImageChange}
              isError={errors.nationalIdPicture}
              errorText='الرجاء تحميل صورة عن هوية الأحوال المدنية'
            ></FormUploadField>

            <FormUploadField
              label="صورة عن هوية الأحوال المدنية أو البطاقة الوطنية - صورة خلفية:"
              name='nationalIdBackPicture'
              onChange={onImageChange}
              isError={errors.nationalIdBackPicture}
              errorText='الرجاء تحميل صورة عن هوية الأحوال المدنية'
            ></FormUploadField>

            <FormUploadField
              label="صورة عن بطاقة السكن:"
              name='residencyPicture'
              onChange={onImageChange}
              isError={errors.residencyPicture}
              errorText='الرجاء تحميل صورة عن بطاقة السكن'
            ></FormUploadField>

            <FormUploadField
              label="صورة من البطاقة التموينية:"
              name='rationPicture'
              onChange={onImageChange}
              isError={errors.rationPicture}
              errorText='الرجاء تحميل صورة عن البطاقة التموينية'
            ></FormUploadField>

            <FormSubmitButton label='التسجيل' />

            <Grid container justify='center'>
              <Box className={classes.alert}>
                <Alert />
              </Box>
            </Grid>

            <Box className={classes.logos}>
              <SponsorsLogos />
            </Box>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

RegisterForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  removeAllAlerts: PropTypes.func.isRequired,
  registerObserver: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  observer: state.observer,
});

export default connect(mapStateToProps, {
  registerObserver,
  setAlert,
  removeAllAlerts,
})(RegisterForm);
