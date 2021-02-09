import { useState } from 'react';
import PropTypes from 'prop-types';

import Thumb from '@components/Thumb/Thumb';
import { StyledButton, StyledActions } from './VoteCardActions.styled';

const VoteCardActions = ({ voteNow, voteAgain }) => {
  const [vote, setVote] = useState(false);
  const [thumbSelected, setThumbSelected] = useState();

  const customOnClick = (value) => {
    if (value && thumbSelected) {
      return setVote(value);
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
      <StyledButton onClick={() => customOnClick(true)}>{voteNow}</StyledButton>
    </StyledActions>
  ) : (
    <StyledButton onClick={() => customOnClick(false)}>
      {voteAgain}
    </StyledButton>
  );
};

VoteCardActions.propTypes = {
  voteNow: PropTypes.string.isRequired,
  voteAgain: PropTypes.string.isRequired
};

export default VoteCardActions;
