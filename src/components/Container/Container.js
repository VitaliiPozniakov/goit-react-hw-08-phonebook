import propTypes from 'prop-types';
import { ContainerWrapper, Title } from './Container.styled';

function Container({ children, title }) {
  return <ContainerWrapper>
     {title && <Title>{title}</Title>}
    {children}</ContainerWrapper>;
}

Container.prototype = {
  children: propTypes.element,
};

export default Container;