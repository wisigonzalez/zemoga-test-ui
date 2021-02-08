import { css } from 'styled-components';

const blurMixin = ({ blurIntensity }) =>
  css`
    :after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      z-index: -1;
      opacity: 0.4;
      position: absolute;
      background: ${({ theme }) => theme.colors.bg.tertiary};
    }
    position: relative;
    backdrop-filter: blur(${blurIntensity}px);
  `;

export default blurMixin;
