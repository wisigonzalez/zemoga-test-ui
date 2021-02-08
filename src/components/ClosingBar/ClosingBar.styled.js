import styled from 'styled-components';

export const StyledContainer = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  height: 55px;
  display: flex;
  position: absolute;
`;

export const StyledTitle = styled.div`
  width: 40%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.font.secondary};
  padding-right: ${({ theme }) => theme.utils.spacing(2)};
  background-color: ${({ theme }) => theme.colors.bg.tertiary30};
  
  :after {
    width: 0;
    height: 0;
    content: '';
    right: -10px;
    position: absolute;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.colors.bg.tertiary30};
  }
`;

export const StyledTimeContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.font.size.h4};
  color: ${({ theme }) => theme.colors.font.primary};
  padding-left: ${({ theme }) => theme.utils.spacing(5)};
  background-color: ${({ theme }) => theme.colors.bg.secondary30};
`;

export const StyledSubtitle = styled.span`
  font-weight: 300;
  margin-left: ${({ theme }) => theme.utils.spacing(2)};
`;

export const StyledDays = styled.span`
  margin-left: ${({ theme }) => theme.utils.spacing(2)};
`;
