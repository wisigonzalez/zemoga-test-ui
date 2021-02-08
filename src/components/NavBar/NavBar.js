import PropTypes from 'prop-types';

import AccessBar from './AccessBar/AccessBar';
import Container from '@components/Container/Container';
import { StyledNavBar, StyledBrand } from './NavBar.styled';

const NavBar = ({ title, links }) => (
  <Container>
    <StyledNavBar>
      <StyledBrand>{title}</StyledBrand>
      <AccessBar links={links} />
    </StyledNavBar>
  </Container>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default NavBar;
