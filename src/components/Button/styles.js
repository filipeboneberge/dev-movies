import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: transparent;
  border: 3px solid #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #ffffff;
    color: #ff0000;
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}

  background-color:#ff0000;
  color: #ffffff;
  border: 4px solid transparent;
  box-shadow: 0px 0px 35px 10px rgba(255, 0, 0, 0.5);

  &:hover {
    background-color: #ff0000;
    color: #ffffff;
    box-shadow: 0px 0px 35px 20px rgba(255, 0, 0, 0.6);
  }
`;
