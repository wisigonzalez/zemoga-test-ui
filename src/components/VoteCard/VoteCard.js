import Image from 'next/image';
import PropTypes from 'prop-types';

import { StyledContent, StyledContainer } from './VoteCard.styled';
import VoteCardContent from '@components/VoteCardContent/VoteCardContent';
import OpinionPercentage from '@components/OpinionPercentage/OpinionPercentage';

const VoteCard = ({
  image,
  title,
  subtitle,
  complement,
  description,
  voteNow,
  voteAgain,
  likeVotes,
  dislikeVotes
}) => (
  <>
    <StyledContainer>
      <Image layout='fill' loading='lazy' objectFit='cover' src={image.url} />
      <StyledContent>
        <VoteCardContent
          title={title}
          subtitle={subtitle}
          complement={complement}
          description={description}
          voteNow={voteNow}
          voteAgain={voteAgain}
          likeVotes={likeVotes}
          dislikeVotes={dislikeVotes}
        />
      </StyledContent>
      <OpinionPercentage
        likesPercentage={likeVotes}
        dislikesPercentage={dislikeVotes}
      />
    </StyledContainer>
  </>
);

VoteCard.propTypes = {
  image: PropTypes.shape({
    fileName: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  voteNow: PropTypes.string.isRequired,
  voteAgain: PropTypes.string.isRequired,
  likeVotes: PropTypes.number.isRequired,
  dislikeVotes: PropTypes.number.isRequired
};

export default VoteCard;
