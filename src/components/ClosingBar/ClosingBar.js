import PropTypes from 'prop-types';

import {
  StyledDays,
  StyledTitle,
  StyledSubtitle,
  StyledContainer,
  StyledTimeContainer
} from './ClosingBar.styled';

const ClosingBar = ({ title, days, subtitle }) => (
  <StyledContainer>
    <StyledTitle>{title}</StyledTitle>
    <StyledTimeContainer>
      <StyledDays>{days}</StyledDays>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledTimeContainer>
  </StyledContainer>
);

ClosingBar.propTypes = {
  title: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ClosingBar;
