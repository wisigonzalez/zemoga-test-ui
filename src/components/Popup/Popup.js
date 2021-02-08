import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledTitle,
  StyledContainer,
  StyledDescription,
  StyledTitlesContainer,
  StyledSubtitle,
  StyledDescriptionContainer,
  StyledMessageContainer,
  StyledPopupContainer,
  StyledCloseIcon
} from './Popup.styled';
import Container from '@components/Container/Container';

const Popup = ({ title, subtitle, description }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClickCloseIcon = () => setIsOpen(false);

  return (
    isOpen && (
      <StyledPopupContainer>
        <Container>
          <StyledContainer>
            <StyledMessageContainer>
              <StyledTitlesContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubtitle>{subtitle}</StyledSubtitle>
              </StyledTitlesContainer>
              <StyledDescriptionContainer>
                <StyledDescription>{description}</StyledDescription>
              </StyledDescriptionContainer>
            </StyledMessageContainer>
            <StyledCloseIcon onClick={onClickCloseIcon}>
              <Image
                quality={100}
                loading='eager'
                layout='fill'
                objectFit='cover'
                priority
                src='/icons/close.svg'
              />
            </StyledCloseIcon>
          </StyledContainer>
        </Container>
      </StyledPopupContainer>
    )
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Popup;
