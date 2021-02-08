import PropTypes from 'prop-types';

import AccessBar from './AccessBar/AccessBar';
import Container from '@components/Container/Container';
import { StyledNavbar, StyledBrand } from './Navbar.styled';

const Navbar = ({ title, links }) => (
  <Container>
    <StyledNavbar>
      <StyledBrand>{title}</StyledBrand>
      <AccessBar links={links} />
    </StyledNavbar>
  </Container>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Navbar;
