import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE
} from './constants';

import { UIUserViewModel } from '../../models';

export interface LoginAction {
  type: typeof LOGIN_REQUEST | typeof LOGIN_RESPONSE | typeof LOGIN_ERROR;
  payload: string | UIUserViewModel;
}

export interface LogoutAction {
  type: typeof LOGOUT_REQUEST | typeof LOGOUT_RESPONSE | typeof LOGOUT_ERROR;
  payload: string;
}

export type AuthenticationActionTypes = LoginAction | LogoutAction;
