import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { FaBars } from 'react-icons/fa';

const HamburgerMenu = ({ onClick }) => (
  <StyledHamburger onClick={onClick}>
    <FaBars />
  </StyledHamburger>
);

const StyledHamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamburgerMenu;
