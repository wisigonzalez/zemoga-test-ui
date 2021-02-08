import styled from 'styled-components';

export default styled.div`
  height: 740px;
  display: flex;
  position: relative;
  align-items: center;
  width: fill-available;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.utils.spacing(10, 0)};

  :before {
    top: 0;
    left: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 300px;
    position: absolute;
    background: linear-gradient(
      0,
      transparent,
      ${({ theme }) => theme.colors.bg.tertiary80}
    );
    z-index: ${({ theme }) => theme.zIndex.forward};
  }
`;
