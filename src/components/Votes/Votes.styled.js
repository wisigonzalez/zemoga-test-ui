import styled from 'styled-components';

export default styled.h3`
  font-weight: 300;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.h3};
  margin-bottom: ${({ theme }) => theme.utils.spacing(10)};

  ${({ theme }) => theme.breakpoints.laptop} {
    text-align: left;
  }
`;
