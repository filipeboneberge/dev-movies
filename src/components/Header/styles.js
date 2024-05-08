import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  background: ${(props) =>
    props.$changeBackground ? "#000000" : "transparent"};
  transition: background 0.5s ease-in-out;

  img {
    width: 25%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  font-weight: 600;
  font-size: 28px;
  cursor: pointer;
  position: relative;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &::after {
    content: "";
    width: ${(props) => (props.$isActive ? "100%" : 0)};
    height: 3px;
    background-color: #189b20;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
    bottom: -5px;
  }

  &:hover::after {
    width: 100%;
  }
`;
