import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import useVote from '@hooks/useVote';
import Thumb from '@components/Thumb/Thumb';
import { StyledButton, StyledActions } from './VoteCardActions.styled';

const VoteCardActions = ({
  id,
  voteNow,
  voteAgain,
  likeVotes,
  dislikeVotes
}) => {
  const router = useRouter();
  const [vote, setVote] = useState(false);
  const [thumbSelected, setThumbSelected] = useState();

  const customOnClick = (value, idCard) => {
    if (value && thumbSelected) {
      setVote(value);
      /* eslint-disable-next-line */
      useVote(idCard, thumbSelected, likeVotes, dislikeVotes);
      setTimeout(() => {
        router.reload();
      }, 2000);

      return true;
    }

    return setVote(value);
  };

  return !vote ? (
    <StyledActions>
      <Thumb
        className='thumb'
        type='like'
        isSelected={thumbSelected === 'like'}
        onClick={() => setThumbSelected('like')}
      />
      <Thumb
        className='thumb'
        type='dislike'
        isSelected={thumbSelected === 'dislike'}
        onClick={() => setThumbSelected('dislike')}
      />
      <StyledButton onClick={() => customOnClick(true, id)}>
        {voteNow}
      </StyledButton>
    </StyledActions>
  ) : (
    <StyledButton onClick={() => customOnClick(false)}>
      {voteAgain}
    </StyledButton>
  );
};

VoteCardActions.propTypes = {
  id: PropTypes.string.isRequired,
  voteNow: PropTypes.string.isRequired,
  voteAgain: PropTypes.string.isRequired,
  likeVotes: PropTypes.number.isRequired,
  dislikeVotes: PropTypes.number.isRequired
};

export default VoteCardActions;
