import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '@components/Footer/Footer';
import NavBar from '@components/Navbar/NavBar';

const Layout = ({ accessBar, children, footer }) => {
  const { title } = accessBar;
  const accessBarLinks = accessBar?.links;

  const footerLinks = footer?.links;
  const { followText, socialNetwork } = footer;

  return (
    <>
      <Head>
        <title>Zemoga test ui | Luis A. González</title>
      </Head>
      <NavBar title={title} links={accessBarLinks} />
      {children}
      <Footer
        links={footerLinks}
        followText={followText}
        socialNetwork={socialNetwork}
      />
    </>
  );
};

Layout.propTypes = {
  accessBar: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.shape({})
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  footer: PropTypes.shape({
    links: PropTypes.shape({}),
    followText: PropTypes.string,
    socialNetwork: PropTypes.shape({})
  }).isRequired
};

export default Layout;
