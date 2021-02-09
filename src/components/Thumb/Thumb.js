import Image from 'next/image';
import PropTypes from 'prop-types';

import { StyledThumb, StyledThumbIcon } from './Thumb.styled';

const Thumb = ({ className, type, isSelected, onClick }) => (
  <StyledThumb
    className={className}
    color={type}
    onClick={onClick}
    isSelected={isSelected || false}
  >
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
  type: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

Thumb.defaultProps = {
  isSelected: false,
  onClick: () => {}
};

export default Thumb;
