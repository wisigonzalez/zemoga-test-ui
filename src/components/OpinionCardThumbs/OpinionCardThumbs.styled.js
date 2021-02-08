import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const StyledContainerIcon = styled.div`
  width: 50%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.button};
  background: ${({ theme, type }) => theme.colors.bg[`${type}70`]};
  
  :hover {
    background: ${({ theme, type }) => theme.colors.bg[type]};
  }
`;

export const StyledIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;
