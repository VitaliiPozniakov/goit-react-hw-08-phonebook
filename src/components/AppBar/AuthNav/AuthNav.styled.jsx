import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CustomLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  color: #2a363b;
  font-size: 22px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #2196f3;
    text-decoration: underline;
  }
  &:hover {
    color: #2196f3;
  }
`;
