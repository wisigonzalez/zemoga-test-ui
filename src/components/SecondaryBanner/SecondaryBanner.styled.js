import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: auto;
  text-align: center;
  position: relative;
  padding: ${({ theme }) => theme.utils.spacing(4, 5)};
  background-color: ${({ theme }) => theme.colors.bg.secondary80};

  ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledMessage = styled.h6`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.h4};
`;

export const StyledAction = styled.button`
  cursor: pointer;
  font-weight: normal;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-top: ${({ theme }) => theme.utils.spacing(5)};
  padding: ${({ theme }) => theme.utils.spacing(3, 5)};
  font-size: ${({ theme }) => theme.font.size.subtitle3};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};

  :hover {
    color: ${({ theme }) => theme.colors.font.secondary};
    transition: ${({ theme }) => theme.transitions.button};
    background-color: ${({ theme }) => theme.colors.bg.tertiary};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 0;
  }
`;
