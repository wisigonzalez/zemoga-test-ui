import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 550px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  :before {
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 450px;
    position: absolute;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.colors.bg.tertiary}
    );
    z-index: ${({ theme }) => theme.zIndex.forward};
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: ${({ theme }) => theme.zIndex.forward};
`;
