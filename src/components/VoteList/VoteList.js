import { useMemo } from 'react';
import PropTypes from 'prop-types';

import VoteCard from '@components/VoteCard/VoteCard';
import { StyledList, StyledListItem } from './VoteList.styled';

const VoteList = ({ votes }) => {
  const memoizedVotes = useMemo(
    () =>
      votes.map(
        (
          {
            id,
            image,
            title,
            subtitle,
            complement,
            description,
            voteNow,
            voteAgain,
            likeVotes,
            dislikeVotes
          },
          index
        ) => (
          <StyledListItem key={`vote-list-item-${index}--${title}`}>
            <VoteCard
              id={id}
              image={image}
              title={title}
              subtitle={subtitle}
              complement={complement}
              description={description}
              voteNow={voteNow}
              voteAgain={voteAgain}
              likeVotes={likeVotes}
              dislikeVotes={dislikeVotes}
            />
          </StyledListItem>
        )
      ),
    [votes]
  );
  return <StyledList>{memoizedVotes}</StyledList>;
};

VoteList.propTypes = {
  votes: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default VoteList;
