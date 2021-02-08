import PropTypes from 'prop-types';

import StyledContainer from './OpinionCard.styled';
import Container from '@components/Container/Container';
import OpinionCardBlur from '@components/OpinionCardBlur/OpinionCardBlur';

const OpinionCard = ({ opinionCard }) => {
  const { title, subtitle, description, link, question } = opinionCard;
  return (
    <Container>
      <StyledContainer>
        <OpinionCardBlur
          title={title}
          subtitle={subtitle}
          description={description}
          link={link}
          question={question}
        />
      </StyledContainer>
    </Container>
  );
};

OpinionCard.propTypes = {
  opinionCard: PropTypes.shape({}).isRequired
};

export default OpinionCard;
