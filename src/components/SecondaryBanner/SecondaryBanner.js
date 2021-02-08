import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledAction,
  StyledMessage,
  StyledContainer
} from './SecondaryBanner.styled';
import Link from '@components/Link/Link';
import Container from '@components/Container/Container';

const SecondaryBanner = ({ image, title, link }) => (
  <Container>
    <Image
      quality={100}
      loading='lazy'
      layout='fill'
      objectFit='cover'
      src={image.url}
    />
    <StyledContainer>
      <StyledMessage>{title}</StyledMessage>
      <StyledAction>
        <Link href={link.url}>{link.text}</Link>
      </StyledAction>
    </StyledContainer>
  </Container>
);

SecondaryBanner.propTypes = {
  image: PropTypes.shape({
    fileName: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default SecondaryBanner;
