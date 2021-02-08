import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledTitle = styled.small`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.paragraph2};
`;

export const StyledSubtitle = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.h2};
  margin-bottom: ${({ theme }) => theme.utils.spacing(5)};
`;

export const StyledDescription = styled.p`
  width: 90%;
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.subtitle3};
`;

export const StyledMoreInfo = styled.div`
  display: flex;
  font-weight: 300;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.paragraph2};
  margin-bottom: ${({ theme }) => theme.utils.spacing(7)};

  > a {
    color: inherit;
    position: relative;
    text-decoration: none;
    margin-left: ${({ theme }) => theme.utils.spacing(2)};
  }

  > a:after {
    left: 0;
    content: '';
    width: 100%;
    bottom: -1px;
    position: absolute;
    border-style: solid;
    border-width: 0 0 1px;
  }
`;

export const StyledMoreInfoIcon = styled.div`
  width: 17px;
  height: 17px;
  position: relative;
  margin-top: ${({ theme }) => theme.utils.spacing(1)};
`;

export const StyledQuestion = styled.h3`
  font-weight: bold;
`;
