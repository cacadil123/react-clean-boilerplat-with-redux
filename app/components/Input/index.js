/**
 *
 * LoginComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div``;
const Input = styled.input``;

function InputComponent({ type, onChange, placeholder }) {
  return (
    <Box>
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </Box>
  );
}

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default memo(InputComponent);
