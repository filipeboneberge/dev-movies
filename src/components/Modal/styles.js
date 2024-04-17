import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 50px;
  position: fixed;
  width: 70%;
  max-width: 1200px;

  button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    margin-top: 15px;
    margin-right: 15px;
  }

  iframe {
    border: none;
  }
`;
