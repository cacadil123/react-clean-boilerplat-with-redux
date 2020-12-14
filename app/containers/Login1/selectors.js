import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login1 state domain
 */

const selectLogin1Domain = state => state.login1 || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login1
 */

const makeSelectLogin1 = () =>
  createSelector(
    selectLogin1Domain,
    substate => substate,
  );

export default makeSelectLogin1;
export { selectLogin1Domain };
