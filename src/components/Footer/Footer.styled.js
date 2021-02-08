import styled from 'styled-components';

export const StyledLink = styled.li`
  font-size: ${({ theme }) => theme.font.size.caption};
  margin-bottom: ${({ theme }) => theme.utils.spacing(3)};

  ${({ theme }) => theme.breakpoints.tablet} {
    cursor: pointer;
    margin-bottom: 0;
    :first-of-type {
      margin-left: 0;
    }
    margin-left: ${({ theme }) => theme.utils.spacing(6)};
  }
`;
export const StyledLogo = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 auto;
  position: relative;
`;

export const StyledLinks = styled.ul`
  width: auto;
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const StyledFollowUs = styled.small`
  display: block;
  font-weight: 300;
  margin: ${({ theme }) => theme.utils.spacing(10, 0, 2, 0)};
  font-size: ${({ theme }) => theme.font.size.caption};

  ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.font.primary};
  margin: ${({ theme }) => theme.utils.spacing(0, 2, 10, 0)};

  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StyledSocialNetworks = styled.ul`
  width: auto;

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const StyledSocialNetwork = styled.li`
  margin-bottom: ${({ theme }) => theme.utils.spacing(3)};

  ${({ theme }) => theme.breakpoints.tablet} {
    cursor: pointer;
    margin-bottom: 0;
    margin-left: ${({ theme }) => theme.utils.spacing(5)};
  }
`;
