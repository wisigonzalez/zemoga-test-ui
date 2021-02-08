const homeSerializer = async (request) => {
  console.log('REQUEST', request);
  const { zePages } = (await request) || {};
  const page = zePages[0].sections;

  return {
    header: {
      accessBar: page[0].content,
      banner: page[1].content,
      closingBar: page[2].content
    },
    popup: page[3].content,
    footer: page[4].content
  };
};

export default homeSerializer;
