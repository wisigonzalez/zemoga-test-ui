import PropTypes from 'prop-types';

import ClosingBar from '@components/ClosingBar/ClosingBar';
import OpinionCard from '@components/OpinionCard/OpinionCard';
import BannerContainer from '@components/BannerContainer/BannerContainer';

const Banner = ({ banner, closingBar }) => {
  const { image, opinionCard } = banner;
  const { title, days, subtitle } = closingBar;
  
  return (
    <BannerContainer image={image}>
      <OpinionCard opinionCard={opinionCard} />
      <ClosingBar title={title} days={days} subtitle={subtitle} />
    </BannerContainer>
  );
};

Banner.propTypes = {
  banner: PropTypes.shape({}).isRequired,
  closingBar: PropTypes.shape({}).isRequired
};

export default Banner;
