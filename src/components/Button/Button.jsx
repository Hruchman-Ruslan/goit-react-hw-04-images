import PropTypes from 'prop-types';
import { ButtonLoadrMore } from 'components';

export const LoadMore = ({ onClick }) => {
  return <ButtonLoadrMore onClick={onClick}>Load more</ButtonLoadrMore>;
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
