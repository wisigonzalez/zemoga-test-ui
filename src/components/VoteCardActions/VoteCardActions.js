import PropTypes from 'prop-types';

import Thumb from '@components/Thumb/Thumb';
import { StyledButton, StyledActions } from './VoteCardActions.styled';

const VoteCardActions = ({ voteNow, voteAgain, previousVote }) =>
  !previousVote ? (
    <StyledActions>
      <Thumb className='thumb' type='like' />
      <Thumb className='thumb' type='dislike' />
      <StyledButton>{voteNow}</StyledButton>
    </StyledActions>
  ) : (
    <StyledButton>{voteAgain}</StyledButton>
  );

VoteCardActions.propTypes = {
  voteNow: PropTypes.string.isRequired,
  voteAgain: PropTypes.string.isRequired,
  previousVote: PropTypes.bool.isRequired
};

export default VoteCardActions;
