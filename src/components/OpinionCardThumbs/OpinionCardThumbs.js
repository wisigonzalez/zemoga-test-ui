import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledIcon,
  StyledContainer,
  StyledContainerIcon
} from './OpinionCardThumbs.styled';

const OpinionCardThumbs = () => {
  return (
    <StyledContainer>
      <StyledContainerIcon type='like'>
        <StyledIcon>
          <Image
            quality={100}
            loading='eager'
            layout='fill'
            objectFit='contain'
            priority
            src={`/icons/like.svg`}
          />
        </StyledIcon>
      </StyledContainerIcon>
      <StyledContainerIcon type='dislike'>
        <StyledIcon>
          <Image
            quality={100}
            loading='eager'
            layout='fill'
            objectFit='contain'
            priority
            src={`/icons/dislike.svg`}
          />
        </StyledIcon>
      </StyledContainerIcon>
    </StyledContainer>
  );
};

export default OpinionCardThumbs;
