import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
       transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const Poster = styled.div`
  z-index: 99;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }
`;
