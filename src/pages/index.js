import PropTypes from 'prop-types';

import App from '@config/app.js';
import Votes from '@components/Votes/Votes';
import Popup from '@components/Popup/Popup';
import Layout from '@components/Layout/Layout';
import Banner from '@components/Banner/Banner';
import VoteList from '@components/VoteList/VoteList';
import FancyLine from '@components/FancyLine/FancyLine';
import { cmsLocales } from '@config/constants/languages';
import SecondaryBanner from '@components/SecondaryBanner/SecondaryBanner';

const fetchHomeData = async (currentLocale) => {
  const { cms } = App.getInstance();
  const [homeData] = await Promise.all([cms.getHome(currentLocale)]);

  return {
    props: {
      homeData: {
        ...homeData
      }
    }
  };
};

const Home = ({ homeData }) => {
  const { header, popup, votes, secondaryBanner, footer } = homeData;
  const { voteCards } = votes.votesList;

  return (
    <Layout accessBar={header.accessBar} footer={footer}>
      <Banner banner={header.banner} closingBar={header.closingBar} />
      <Popup
        title={popup.title}
        subtitle={popup.subtitle}
        description={popup.description}
      />
      <Votes title={votes.title}>
        <VoteList votes={voteCards} />
      </Votes>
      <SecondaryBanner
        image={secondaryBanner.image}
        title={secondaryBanner.title}
        link={secondaryBanner.link}
      />
      <FancyLine />
    </Layout>
  );
};

export const getServerSideProps = async () => fetchHomeData(cmsLocales.en);

Home.propTypes = {
  homeData: PropTypes.shape({
    header: PropTypes.shape({
      accessBar: PropTypes.shape({}),
      banner: PropTypes.shape({}),
      closingBar: PropTypes.shape({})
    }),
    popup: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string
    }),
    votes: PropTypes.shape({
      title: PropTypes.string,
      votesList: PropTypes.shape({
        voteCards: PropTypes.arrayOf(PropTypes.shape({}))
      })
    }),
    secondaryBanner: PropTypes.shape({
      image: PropTypes.PropTypes.shape({}),
      title: PropTypes.string,
      link: PropTypes.PropTypes.shape({})
    }),
    footer: PropTypes.shape({})
  }).isRequired
};

export default Home;
