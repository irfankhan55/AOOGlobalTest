import AsyncStorageUtils from '../../utility/AsyncStorageUtils';
import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  CLEAR_APP_DATA
} from './constants';
import { synchronization } from '../actions';
import { UIUserViewModel } from '../../models';
import { resetRealm } from '../../database';

import { LoginAction, LogoutAction } from './types';
import AzureAuthUtils from '../../azure-auth-utils';
import { trackException } from '../../app-insights';

function loginRequestAction(): LoginAction {
  return {
    type: LOGIN_REQUEST,
    payload: ''
  };
}

function loginResponseAction(user: UIUserViewModel): LoginAction {
  return {
    type: LOGIN_RESPONSE,
    payload: user
  };
}

function loginErrorAction(error: string): LoginAction {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
}

const login = () => async (dispatch: Function, getState: Function) => {
  dispatch(loginRequestAction());
  try {
    const azureAuthUtils = new AzureAuthUtils();
    let user: UIUserViewModel = await azureAuthUtils.login();
    if (user) {
      await saveUserInitialsAndClearDataIfDiffUser(user.userInitial, dispatch);
      await AsyncStorageUtils.setUserAuthToken(user.accessToken);
      await AsyncStorageUtils.setUserId(user.userId);
      await AsyncStorageUtils.setIsTimeRegistrationFormOpen(false);
      dispatch(loginResponseAction(user));
      dispatch(synchronization(user));
    } else {
      throw new Error("User doesn't exist.");
    }
  } catch (error) {
    console.log(error);
    trackException(error);
    let errorMessage = '';
    if (error) {
      if (error.error_description) {
        errorMessage = error.error_description;
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.name) {
        errorMessage = error.name;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
    } else {
      errorMessage =
        'Something went wrong while authenticating user, Please try again';
    }
    dispatch(loginErrorAction(errorMessage));
  }
};

function logoutRequestAction(): LogoutAction {
  return {
    type: LOGOUT_REQUEST,
    payload: ''
  };
}

function logoutResponseAction(): LogoutAction {
  return {
    type: LOGOUT_RESPONSE,
    payload: ''
  };
}

function logoutErrorAction(error: string): LogoutAction {
  return {
    type: LOGOUT_ERROR,
    payload: error
  };
}

function clearAppDataAction() {
  return {
    type: CLEAR_APP_DATA
  };
}

const logout = () => async (dispatch: Function, getState: Function) => {
  dispatch(logoutRequestAction());
  const azureAuthUtils = new AzureAuthUtils();
  azureAuthUtils
    .logout()
    .then(() => {
      dispatch(logoutResponseAction());
    })
    .catch((error) => {
      dispatch(logoutErrorAction(error));
    });
};

async function saveUserInitialsAndClearDataIfDiffUser(
  userInitial: string,
  dispatch: Function
) {
  const previousUser = await AsyncStorageUtils.getUserInitials();
  if (previousUser && previousUser === userInitial) {
    console.log('Logged in with same user.');
  } else {
    console.log('Logged in with new user.');
    await resetRealm();
    await AsyncStorageUtils.clear();
    dispatch(clearAppDataAction());
    await AsyncStorageUtils.setUserInitials(userInitial);
  }
}

export { login, logout, loginErrorAction, clearAppDataAction };
