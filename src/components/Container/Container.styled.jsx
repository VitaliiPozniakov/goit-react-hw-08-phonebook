
import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
padding-left: 15px;
padding-right: 15px;
padding-top: 15px;
margin: 0 auto;
@media screen and (min-width: 480px) {
  width: 480px;
}
@media screen and (min-width: 768px) {
  width: 768px;
}
@media screen and (min-width: 1200px) {
  width: 1200px;
}
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;