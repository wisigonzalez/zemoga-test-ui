import styled from 'styled-components';

export const StyledPopupContainer = styled.div`
  width: fill-available;
  margin: ${({ theme }) => theme.utils.spacing(10, 0)};
`;

export const StyledMessageContainer = styled.div`
  width: 100%;
  display: block;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 90%;
    display: flex;
    align-items: center;
  }
`;
export const StyledTitlesContainer = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 30%;
  }
`;
export const StyledTitle = styled.h6`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.subtitle1};

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.font.size.h6};
  }
`;
export const StyledSubtitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.h5};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.font.size.h3};
  }
`;
export const StyledDescriptionContainer = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 70%;
  }
`;
export const StyledDescription = styled.p`
  font-weight: 300;
`;

export const StyledContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => theme.utils.spacing(7)};
  background: ${({ theme }) => theme.colors.bg.primary};

  ${({ theme }) => theme.breakpoints.tablet} {
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.utils.spacing(5, 7)};
  }
`;

export const StyledCloseIcon = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: relative;
`;
