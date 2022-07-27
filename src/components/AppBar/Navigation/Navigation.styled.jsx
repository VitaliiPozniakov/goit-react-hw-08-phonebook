import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

// export const Wrapper = styled.header`
// box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//     0px 1px 3px 0px rgba(0, 0, 0, 0.12);
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
// `;

export const CustomLink = styled(NavLink)`
display: inline-block;
text-decoration: none;
padding: 15px;
color: #2a363b;
  font-size: 22px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #3f51b5;
    text-decoration: underline;
  }
  &:hover{
      color: #3f51b5;
  }
`;
