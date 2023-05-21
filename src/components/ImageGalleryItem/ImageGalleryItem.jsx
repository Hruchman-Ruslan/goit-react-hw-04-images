import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, onItemClick }) => {
  return (
    <Item onClick={onItemClick}>
      <Img src={webformatURL} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
