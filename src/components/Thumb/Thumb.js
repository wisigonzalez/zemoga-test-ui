import Image from 'next/image';
import PropTypes from 'prop-types';

import { StyledThumb, StyledThumbIcon } from './Thumb.styled';

const Thumb = ({ className, type }) => (
  <StyledThumb className={className} color={type}>
    <StyledThumbIcon>
      <Image
        quality={100}
        loading='lazy'
        layout='fill'
        objectFit='contain'
        src={`/icons/${type}.svg`}
      />
    </StyledThumbIcon>
  </StyledThumb>
);

Thumb.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Thumb;
