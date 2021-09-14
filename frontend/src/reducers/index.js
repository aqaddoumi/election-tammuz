import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import contact from './contact';
import observer from './observer';
import survey from './survey';

export default combineReducers({
  alert,
  auth,
  contact,
  observer,
  survey
});
