import axios from 'axios';
import { api } from '../api';

import { setAlert } from './alert';

import {
  REGISTER_OBSERVER_WAITING,
  REGISTER_OBSERVER_SUCCESS,
  REGISTER_OBSERVER_FAIL,
  REGISTER_OBSERVER_REDIRECTED,
} from './types';

export const registerObserver = ({
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
}) => async (dispatch) => {
  console.log(personalPicture)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const isRegistered = false;

  const formData = new FormData();

  formData.append(`files.personalPicture`, personalPicture, personalPicture.name);
  formData.append(`files.nationalIdPicture`, nationalIdPicture, nationalIdPicture.name);
  formData.append(`files.nationalIdBackPicture`, nationalIdBackPicture, nationalIdBackPicture.name);
  formData.append(`files.residencyPicture`, residencyPicture, residencyPicture.name);
  formData.append(`files.rationPicture`, rationPicture, rationPicture.name);

  const data = {} 
  data.electoralNumber = electoralNumber;
  data.firstName = firstName
  data.fatherName = fatherName
  data.grandfatherName = grandfatherName
  data.familyNumber = familyNumber
  data.sex = sex
  data.dateOfBirth = dateOfBirth
  data.firstPhoneNumber = firstPhoneNumber
  data.secondPhoneNumber = secondPhoneNumber
  data.email = email
  data.governante = governante
  data.constituency = constituency
  data.didYouMonitorBefore = didYouMonitorBefore
  data.doYouHaveSmartphone = doYouHaveSmartphone
  data.whichAppsDoYouUse = whichAppsDoYouUse
  data.howIsTheConnection = howIsTheConnection
  data.availableForTraining = availableForTraining
  data.availableForRemoteTraining = availableForRemoteTraining
  data.availableForObserving = availableForObserving

  formData.append('data', JSON.stringify(data));

  try {
    dispatch({
      type: REGISTER_OBSERVER_WAITING,
    })

    await axios.post(api('/observers'), formData, config);

    dispatch({
      type: REGISTER_OBSERVER_SUCCESS,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
    }

    dispatch({
      type: REGISTER_OBSERVER_FAIL,
    });
  }
};

export const registerObserverRedirected = () => async (dispatch) => {
  dispatch({
    type: REGISTER_OBSERVER_REDIRECTED,
  });
};