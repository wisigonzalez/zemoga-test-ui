import App from '@config/app.js';

const useVote = async (idValue, vote, likesVotes, dislikeVotes) => {
  const likes = vote === 'like' ? likesVotes + 1 : likesVotes - 1;
  const dislikes = vote === 'dislike' ? dislikeVotes + 1 : dislikeVotes - 1;

  const { cms } = App.getInstance();
  const [updateVoteData] = await Promise.all([
    cms.updateVote({
      id: idValue,
      likeVotes: likes,
      dislikeVotes: dislikes
    })
  ]);

  console.log('vote sended');

  return true;
};

export default useVote;
