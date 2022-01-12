import styled from 'styled-components';

const theme = {
  primary: {
    backgroundColor: '#BBC3CF',
    font: '#FFFFFF',
  },
  secondary: {
    backgroundColor: '#E82223',
    font: '#FFFFFF',
  },
  logOut: {
    backgroundColor: '#FFFFFF',
    font: '#E82223',
  },
};

const size = {
  default: {
    fontSize: '14px',
    letterSpacing: '0.8px',
  },
};

const border = {
  on: {
    border: '1px solid #E82223',
  },
  off: {
    border: 'none',
  },
};

const StyledButton = styled.button`
  background-color: ${(props) => theme[props.theme].backgroundColor};
  color: ${(props) => theme[props.theme].font};
  font-size: ${(props) => size[props.size].fontSize};
  border: ${(props) => border[props.border].border};
  width: 327px;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;
`;
StyledButton.defaultProps = {
  theme: 'primary',
  border: 'off',
  size: 'default',
};

export default StyledButton;
