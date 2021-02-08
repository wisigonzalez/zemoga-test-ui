import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledTitle,
  StyledSubtitle,
  StyledMoreInfo,
  StyledContainer,
  StyledDescription,
  StyledCallToAction,
  StyledMoreInfoLogo
} from './OpinionCardBlur.styled';

import Link from '@components/Link/Link';
import BlurCard from '@components/BlurCard/BlurCard';
import OpinionCardThumbs from '@components/OpinionCardThumbs/OpinionCardThumbs';

const OpinionCardBlur = ({ title, subtitle, description, link, question }) => {
  return (
    <>
      <StyledContainer>
        <BlurCard>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledMoreInfo>
            <StyledMoreInfoLogo>
              <Image
                priority
                quality={100}
                layout='fill'
                loading='eager'
                objectFit='contain'
                src={link.icon.url}
              />
            </StyledMoreInfoLogo>
            <Link href={link.url}>{link.text}</Link>
          </StyledMoreInfo>
          <StyledCallToAction>{question}</StyledCallToAction>
        </BlurCard>
        <OpinionCardThumbs />
      </StyledContainer>
    </>
  );
};

OpinionCardBlur.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    icon: PropTypes.shape({
      fileName: PropTypes.string,
      url: PropTypes.string
    }),
    text: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  question: PropTypes.string.isRequired
};

export default OpinionCardBlur;
