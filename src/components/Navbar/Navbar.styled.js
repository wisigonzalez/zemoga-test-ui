import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  position: absolute;
  background: transparent;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.utils.spacing(8)};
  color: ${({ theme }) => theme.colors.font.secondary};
  z-index: ${({ theme }) => theme.zIndex.fixed};

`;

export const StyledBrand = styled.div`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.h5};
`;
