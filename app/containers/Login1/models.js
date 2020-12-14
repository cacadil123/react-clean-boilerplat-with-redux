/*
 *
 * Login data models
 *
 */

import { Record } from 'immutable';
import ServerRecord from '../../utils/serverRecord';

export const LoginModel = ServerRecord({
  token: null,
});

export const Login = Record({
  login: new LoginModel(),
});

export const LoginServerRequest = request => {
  const response = {
    name: request.name,
  };
  // is MSISDN

  return response;
};

export const LoginServerResponse = request => {
  const response = {
    token: request.token,
  };

  return response;
};
