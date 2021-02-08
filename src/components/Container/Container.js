import PropTypes from 'prop-types';

import StyledContainer from './Container.styled';

const Container = ({ fluid, limit, height, centered, relative, children }) => (
  <StyledContainer
    fluid={fluid}
    limit={limit}
    height={height}
    centered={centered}
    relative={relative}
  >
    {children}
  </StyledContainer>
);

Container.propTypes = {
  fluid: PropTypes.bool,
  limit: PropTypes.bool,
  height: PropTypes.string,
  centered: PropTypes.bool,
  relative: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Container.defaultProps = {
  fluid: false,
  limit: false,
  height: undefined,
  centered: true,
  relative: true
};

export default Container;
