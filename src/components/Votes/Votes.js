import PropTypes from 'prop-types';

import StyledTitle from './Votes.styled';
import Container from '@components/Container/Container';

const Votes = ({ title, children }) => (
  <Container>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </Container>
);

Votes.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Votes;
