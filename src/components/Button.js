import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#222" : "#4b59f7")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#4b59f7" : "#fff")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};

  &:hover {
    transition: all 2.3s ease-out;
    background: ${({ primary }) => (primary ? "#fff" : "#222")};
  }
`;
