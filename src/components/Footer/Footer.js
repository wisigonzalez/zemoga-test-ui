import Image from 'next/image';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  StyledLink,
  StyledLogo,
  StyledLinks,
  StyledFollowUs,
  StyledContainer,
  StyledSocialNetwork,
  StyledSocialNetworks
} from './Footer.styled';
import Link from '@components/Link/Link';
import Container from '@components/Container/Container';

const Footer = ({ links, followText, socialNetwork }) => {
  const memoizedLinks = useMemo(
    () =>
      links?.map(({ text, url }, index) => (
        <StyledLink key={`footer-link-${index}--${text}`}>
          <Link href={url}>{text}</Link>
        </StyledLink>
      )),
    [links]
  );

  const memoizedSocialNetworkLinks = useMemo(
    () =>
      socialNetwork.links?.map(({ icon, url }, index) => (
        <StyledSocialNetwork
          key={`footer-social-network-${index}--${icon.fileName}`}
        >
          <Link href={url}>
            <StyledLogo>
              <Image
                layout='fill'
                quality={100}
                loading='lazy'
                objectFit='cover'
                src={icon.url}
              />
            </StyledLogo>
          </Link>
        </StyledSocialNetwork>
      )),
    [socialNetwork]
  );
  return (
    <Container>
      <StyledContainer>
        <StyledLinks>{memoizedLinks}</StyledLinks>
        <StyledSocialNetworks>
          <StyledFollowUs>{followText}</StyledFollowUs>
          {memoizedSocialNetworkLinks}
        </StyledSocialNetworks>
      </StyledContainer>
    </Container>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired,
  followText: PropTypes.string.isRequired,
  socialNetwork: PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.shape({
          fileName: PropTypes.string,
          url: PropTypes.string
        }),
        url: PropTypes.string
      })
    )
  }).isRequired
};

export default Footer;
