import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledPercentage,
  StyledPercentageLogo,
  StyledPercentageText
} from './OpinionPercentage.styled';

const OpinionPercentage = ({ likesPercentage, dislikesPercentage }) => (
  <StyledContainer>
    {dislikesPercentage < 100 && (
      <StyledPercentage type='like' width={`${likesPercentage}%`}>
        <StyledPercentageLogo>
          <Image
            quality={100}
            loading='lazy'
            layout='fill'
            objectFit='contain'
            src='/icons/like.svg'
          />
        </StyledPercentageLogo>
        <StyledPercentageText>{likesPercentage}</StyledPercentageText>
      </StyledPercentage>
    )}
    {likesPercentage < 100 && (
      <StyledPercentage type='dislike' width={`${dislikesPercentage}%`}>
        <StyledPercentageLogo>
          <Image
            quality={100}
            loading='lazy'
            layout='fill'
            objectFit='contain'
            src='/icons/dislike.svg'
          />
        </StyledPercentageLogo>
        <StyledPercentageText>{dislikesPercentage}</StyledPercentageText>
      </StyledPercentage>
    )}
  </StyledContainer>
);

OpinionPercentage.propTypes = {
  likesPercentage: PropTypes.number.isRequired,
  dislikesPercentage: PropTypes.number.isRequired
};

export default OpinionPercentage;
