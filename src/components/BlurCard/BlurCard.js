import PropTypes from 'prop-types';

import StyledBlurCard from './BlurCard.styled';

const BlurCard = ({ blurIntensity, children }) => (
  <StyledBlurCard blurIntensity={blurIntensity}>{children}</StyledBlurCard>
);

BlurCard.propTypes = {
  blurIntensity: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

BlurCard.defaultProps = {
  blurIntensity: 30
};

export default BlurCard;
