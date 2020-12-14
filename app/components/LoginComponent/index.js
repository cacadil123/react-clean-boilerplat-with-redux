/**
 *
 * LoginComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';


function LoginComponent() {
  return (
    <div>
      <input type="text" placeholder="enter value" />
      <button type="submit" onClick={} >submit</button>
    </div>
  );
}

LoginComponent.propTypes = {};

export default memo(LoginComponent);
