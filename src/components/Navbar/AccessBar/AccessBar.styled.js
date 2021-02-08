import styled from 'styled-components';

export const StyledAccessBar = styled.ul`
  top: 0;
  right: 0;
  bottom: 0;
  width: 65%;
  position: fixed;
  list-style: none;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.h6};
  padding-top: ${({ theme }) => theme.utils.spacing(5)};
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.bg.tertiary};

  ${({ theme }) => theme.breakpoints.tablet} {
    left: unset;
    width: 50%;
    text-align: right;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0;
    margin: 0;
    width: auto;
    display: flex;
    background: none;
    position: relative;
    font-size: ${({ theme }) => theme.font.size.subtitle1};
  }
`;

export const StyledAccessBarLink = styled.li`
  :hover {
    color: ${({ theme }) => theme.colors.font.brand};
  }
  margin: ${({ theme }) => theme.utils.spacing(10, 5)};
  
  ${({ theme }) => theme.breakpoints.tablet} {
    margin: ${({ theme }) => theme.utils.spacing(10, 10)};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    cursor: pointer;
    margin: ${({ theme }) => theme.utils.spacing(0, 0, 0, 15)};
  }
`;

export const StyledSearchIcon = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: auto;
  }
`;

export const StyledAccessBarMobile = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  display: ${({ opened }) => (opened ? 'none' : 'block')};
  
  ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
  
`;

export const StyledCloseIcon = styled.div`
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.super};
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  
  ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;
