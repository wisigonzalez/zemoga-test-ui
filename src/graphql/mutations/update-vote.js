export default `
  mutation updateVoteCard($id: ID!, $likeVotes: Int, $dislikeVotes: Int) {
    updateZeVoteCard(
      where: { id: $id }
      data: { likeVotes: $likeVotes, dislikeVotes: $dislikeVotes }
    ) {
      id
      likeVotes
      dislikeVotes
    }
  }  
`;
