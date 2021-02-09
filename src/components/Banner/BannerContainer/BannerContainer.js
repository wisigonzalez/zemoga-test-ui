import Image from 'next/image';
import PropTypes from 'prop-types';

import StyledContainer from './BannerContainer.styled';

const BannerContainer = ({ image, children }) => (
  <StyledContainer>
    <Image
      priority
      quality={100}
      layout='fill'
      loading='eager'
      objectFit='cover'
      objectPosition='0px 0px'
      src={image.url}
    />
    {children}
  </StyledContainer>
);

BannerContainer.propTypes = {
  image: PropTypes.shape({
    fileName: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

BannerContainer.defaultProps = {};

export default BannerContainer;
