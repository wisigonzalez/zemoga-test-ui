import styled from 'styled-components';

import isSelectedMixin from '@mixins/border-is-selected.mixin';

export const StyledThumb = styled.div`
  display: flex;
  cursor: pointer;
  max-height: 17px;
  ${isSelectedMixin}
  text-align: center;
  justify-content: center;
  padding: ${({ theme }) => theme.utils.spacing(2)};
  margin-right: ${({ theme }) => theme.utils.spacing(2)};
  background-color: ${({ theme, color }) => theme.colors.bg[color]};
`;

export const StyledThumbIcon = styled.div`
  width: 17px;
  height: 17px;
  position: relative;
`;
