import styled from 'styled-components';

import blurMixin from '@mixins/blur.mixin';

export default styled.div`
  ${blurMixin}
  padding: ${({ theme }) => theme.utils.spacing(7, 7)};
  color: ${({ theme }) => theme.colors.font.secondary};
`;
