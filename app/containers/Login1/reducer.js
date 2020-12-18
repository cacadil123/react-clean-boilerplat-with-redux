/*
 *
 * Login reducer
 *
 */

import * as actions from './actions';
import * as models from './models';

// todo: create a model to define what your working with
const initialState = models.Login();

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.loginUser().type:
      return {
        ...state,
        login: new models.LoginModel().setLoading(),
      };

    case actions.loginUserSuccess().type:
      return {
        ...state,
        login: new models.LoginModel({ ...action.payload }).setLoaded(),
      };

    case actions.loginUserError().type:
      return {
        ...state,
        login: new models.LoginModel().setError(action.payload),
      };

    default:
      return state;
  }
}

export default LoginReducer;
