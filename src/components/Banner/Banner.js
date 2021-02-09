import PropTypes from 'prop-types';

import ClosingBar from '@components/ClosingBar/ClosingBar';
import OpinionCard from '@components/OpinionCard/OpinionCard';
import BannerContainer from '@components/Banner/BannerContainer/BannerContainer';

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
  banner: PropTypes.shape({
    image: PropTypes.shape({
      fileName: PropTypes.string,
      url: PropTypes.string
    }),
    opinionCard: PropTypes.shape({})
  }).isRequired,
  closingBar: PropTypes.shape({
    title: PropTypes.string,
    days: PropTypes.number,
    subtitle: PropTypes.string
  }).isRequired
};
export default Banner;
