import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
  height: 40px;
  margin-bottom: 50px;
  color: black;
  background-color: #ffff;
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;


  &:hover,
  &:focus {
    background-color: #1e90ff;
    color: #ffffffff;
  }
  &:active {
    background-color: #1e90ff;
    color: red;
  }
`;

export const ButtonText = styled.span`
  margin-right: 10px;
  text-transform: uppercase;
  font-sixe: 30px;
  font-weight: 700;
`;