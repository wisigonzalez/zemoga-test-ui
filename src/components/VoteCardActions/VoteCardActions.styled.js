import styled from 'styled-components';

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  padding: ${({ theme }) => theme.utils.spacing(3, 5)};
  transition: ${({ theme }) => theme.transitions.button};
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};

  :hover {
    color: ${({ theme }) => theme.colors.font.primary};
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
`;
