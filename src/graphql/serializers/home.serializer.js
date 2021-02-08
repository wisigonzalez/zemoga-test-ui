const homeSerializer = async (request) => {
  const { zePages } = (await request) || {};
  const page = zePages[0].sections;

  return {
    header: {
      accessBar: page[0].content,
      banner: page[1].content,
      closingBar: page[2].content
    },
    popup: page[3].content,
    votes: { title: page[4].title, votesList: page[4].content },
    secondaryBanner: page[5].content,
    footer: page[6].content
  };
};

export default homeSerializer;
