/**
 *
 * Login1
 *
 */

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin1 from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Input from '../../components/Input';
import Button from '../../components/Button/tests';
import { loginUser } from './actions';

export function Login1({ dispatch, login1 }) {
  const [name, setName] = useState('');
  useInjectReducer({ key: 'login1', reducer });
  useInjectSaga({ key: 'login1', saga });

  const onSubmit = () => {
    const obj = {
      name,
    };
    dispatch(loginUser(obj));
  };
  return (
    <div>
      <Input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <Button type="button" onClick={onSubmit} value="submit name" />
    </div>
  );
}

Login1.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login1: makeSelectLogin1(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login1);
