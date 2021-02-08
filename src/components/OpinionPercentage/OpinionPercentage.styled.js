import styled from 'styled-components';

import widthMixin from '@mixins/width.mixin';

export const StyledContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 45px;
  display: flex;
  font-weight: 400;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.forward};
  font-size: ${({ theme }) => theme.font.size.h5};
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const StyledPercentage = styled.div`
  ${widthMixin}
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${({ type }) =>
    type === 'like' ? 'flex-start' : 'flex-end'};
  padding-left: ${({ theme }) => theme.utils.spacing(2)};
  background: ${({ theme, type }) => theme.colors.bg[`${type}90`]};
`;

export const StyledPercentageLogo = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const StyledPercentageText = styled.span`
  margin: ${({ theme }) => theme.utils.spacing(2)};

  :after {
    content: '%';
    font-size: ${({ theme }) => theme.font.size.subtitle3};
  }
`;
