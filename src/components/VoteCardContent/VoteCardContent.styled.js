import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 80%;
  z-index: ${({ theme }) => theme.zIndex.forward};
  padding: ${({ theme }) => theme.utils.spacing(10)};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const StyledTitle = styled.h1`
  position: relative;
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.h2};

  > .thumb {
    position: absolute;
    left: ${({ theme }) => theme.utils.spacing(-10)};
    bottom: ${({ theme }) => theme.utils.spacing(2.5)};
  }
`;

export const StyledAdditionalInfo = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.caption};
`;

export const StyledSubtitle = styled.small`
  font-weight: bold;
`;
export const StyledComplement = styled.small`
  font-weight: normal;
  margin-left: ${({ theme }) => theme.utils.spacing(1)};
`;

export const StyledDescription = styled.p`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.paragraph1};
`;
