import { css } from 'styled-components';

import fluidMixin from '@mixins/container-fluid.mixin';

const containerWidthMixin = ({ theme }) => css`
  ${fluidMixin}
  width: ${theme.containerWidth.smallMobile.width};
  max-width: ${theme.containerWidth.smallMobile.maxWidth};

  ${theme.breakpoints.mobile} {
    ${fluidMixin}
    width: ${theme.containerWidth.mobile.width};
    max-width: ${theme.containerWidth.mobile.maxWidth};
  }
  ${theme.breakpoints.tablet} {
    ${fluidMixin}
    width: ${theme.containerWidth.tablet.width};
  }
  ${theme.breakpoints.desktop} {
    ${fluidMixin}
    width: ${theme.containerWidth.desktop.width};
    max-width: ${theme.containerWidth.desktop.maxWidth};
  }
  ${theme.breakpoints.screen} {
    ${fluidMixin}
    width: ${theme.containerWidth.screen.width};
    max-width: ${theme.containerWidth.screen.maxWidth};
  }
`;

export default containerWidthMixin;
