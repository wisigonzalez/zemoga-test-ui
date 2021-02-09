import PropTypes from 'prop-types';

import Votes from '@components/Votes/Votes';
import Popup from '@components/Popup/Popup';
import Layout from '@components/Layout/Layout';
import Banner from '@components/Banner/Banner';
import mockPopup from '@__mocks__/popup/popup';
import mockVotes from '@__mocks__/votes/votes';
import mockFooter from '@__mocks__/footer/footer';
import mockBanner from '@__mocks__/banner/banner';
import VoteList from '@components/VoteList/VoteList';
import FancyLine from '@components/FancyLine/FancyLine';
import mockAccessBar from '@__mocks__/accessBar/accessBar';
import mockClosingBar from '@__mocks__/closingBar/closingBar';
import SecondaryBanner from '@components/SecondaryBanner/SecondaryBanner';
import mockSecondaryBanner from '@__mocks__/secondaryBanner/secondaryBanner';

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

export const getServerSideProps = () => {
  const homeData = {
    header: {
      accessBar: mockAccessBar,
      banner: mockBanner,
      closingBar: mockClosingBar
    },
    popup: mockPopup,
    votes: mockVotes,
    secondaryBanner: mockSecondaryBanner,
    footer: mockFooter
  };

  return {
    props: {
      homeData: {
        ...homeData
      }
    }
  };
};

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
