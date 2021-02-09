import PropTypes from 'prop-types';

import {
  StyledSubtitle,
  StyledTitle,
  StyledComplement,
  StyledContainer,
  StyledDescription,
  StyledAdditionalInfo
} from './VoteCardContent.styled';
import Thumb from '@components/Thumb/Thumb';
import VoteCardActions from '@components/VoteCardActions/VoteCardActions';

const VoteCardContent = ({
  title,
  subtitle,
  complement,
  description,
  voteNow,
  voteAgain,
  likeVotes,
  dislikeVotes
}) => {
  const type = likeVotes > dislikeVotes ? 'like' : 'dislike';

  return (
    <StyledContainer>
      <StyledTitle>
        <Thumb className='thumb' type={type} />
        {title}
      </StyledTitle>
      <StyledAdditionalInfo>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledComplement>{complement}</StyledComplement>
      </StyledAdditionalInfo>
      <StyledDescription>{description}</StyledDescription>
      <VoteCardActions voteNow={voteNow} voteAgain={voteAgain} />
    </StyledContainer>
  );
};

VoteCardContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  voteNow: PropTypes.string.isRequired,
  voteAgain: PropTypes.string.isRequired,
  likeVotes: PropTypes.number.isRequired,
  dislikeVotes: PropTypes.number.isRequired
};

export default VoteCardContent;
