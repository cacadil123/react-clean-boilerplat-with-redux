/**
 *
 * LoginComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div``;
const Button = styled.input``;

function ButtonComponent({ type, onClick, value }) {
  return (
    <Box>
      <Button type={type} onClick={onClick} value={value} />
    </Box>
  );
}

ButtonComponent.defaultProps = {
  type: 'button',
};
ButtonComponent.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default memo(ButtonComponent);
