import styled from "@emotion/styled";


export const Wrapper = styled.div`
display: flex;
align-items: center;
`;

export const Avatar = styled.img`
margin-right: 10px;

@media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Name = styled.p`
font-weight: 700;
margin-right: 20px;
font-size: 16px;

@media screen and (max-width: 500px) {
      display: none;
    }
  

`;

export const Btn = styled.button`
padding: 5px 32px;
color: black;
background-color: #ffffffff;
font-weight: 700;
font-size: 12px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
width: 120px;
height: 40px;
// margin: 0 auto 20px;
// display: block;

transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

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

