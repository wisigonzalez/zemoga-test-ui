const homeSerializer = async (request) => {
  const { pdPages } = (await request) || {};
  const page = pdPages[0];

  return {
    header: {
      accessBar: page[0].content
    },
    footer: page[3].content
  };
};

export default homeSerializer;
