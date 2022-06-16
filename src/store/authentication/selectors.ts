import { createSelector } from 'reselect';
import { UIUserViewModel } from '../../models';
import { StoreState, LoginState } from '../storeState';

const loginSelector = (state: StoreState) => state.loginReducer;

export const loginError = createSelector(
  loginSelector,
  (state: LoginState) => state.loginError
);

export const isLoginInProcess = createSelector(
  loginSelector,
  (state: LoginState) => state.loginInProcess
);

export const loggedInUser = createSelector(
  loginSelector,
  (state: LoginState) => state.user
);

export const getUserInitial = createSelector(
  loginSelector,
  (state: LoginState) => state.user.userInitial
);

const getResponsibleInitials = (
  state: StoreState,
  responsibleInitials: string
) => responsibleInitials;

export const isUserAllowedToEdit = createSelector(
  loggedInUser,
  getResponsibleInitials,
  (user: UIUserViewModel, responsibleInitials: string) => {
    if (user?.isLoggedIn == true) {
      const userInitials = user.userInitial.toLocaleLowerCase();
      if (
        userInitials &&
        responsibleInitials &&
        userInitials === responsibleInitials.toLocaleLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
);
