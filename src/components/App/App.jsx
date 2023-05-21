import { useEffect, useState } from 'react';

import * as ImageService from '../../service/api';

import { Container, Section } from '../index';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { LoadMore } from 'components/Button/Button';
import { Modal } from '../Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { hits, totalHits } = await ImageService.getImages(query, page);

        const images = hits.map(({ id, tags, webformatURL, largeImageURL }) => {
          return {
            id,
            tags,
            webformatURL,
            largeImageURL,
          };
        });

        console.log(images);

        setImages(prevImages => [...prevImages, ...images]);
        setTotalImages(totalHits);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const getQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotalImages(0);
  };

  const addPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (src, alt) => {
    setLargeImageURL(src);
    setTags(alt);
    setShowModal(true);
  };

  const closeMoadal = () => {
    setLargeImageURL(null);
    setTags(null);
    setShowModal(false);
  };

  const showButton = images.length !== totalImages && !isLoading;

  return (
    <Container>
      <Section>
        <SearchBar onSubmit={getQuery} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {error && <p>{error}</p>}
        {showButton && <LoadMore onClick={addPage} />}
        {showModal && (
          <Modal src={largeImageURL} alt={tags} onClose={closeMoadal} />
        )}
      </Section>
    </Container>
  );
};

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// export class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//     images: [],
//     isLoading: false,
//     error: '',
//     totalImages: 0,
//     showModal: false,
//     largeImageURL: '',
//     tags: '',
//   };

//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;

//     console.log(this.state);

//     if (prevState.query !== query || prevState.page !== page) {
//       try {
//         this.setState({ isLoading: true, error: '' });
//         const data = await ImageService.getImages(query, page);

//         const images = data.hits.map(
//           ({ id, tags, webformatURL, largeImageURL }) => {
//             return {
//               id,
//               tags,
//               webformatURL,
//               largeImageURL,
//             };
//           }
//         );

//         this.setState(prevState => {
//           return {
//             images: [...prevState.images, ...images],
//             totalImages: data.totalHits,
//           };
//         });
//       } catch (error) {
//         this.setState({ error: 'Something went wrong' });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   addPage = () => {
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });
//   };

//   getQuery = query => {
//     if (query === this.state.query) {
//       alert('Change search');
//       return;
//     }
//     this.setState({ query, page: 1, images: [], totalImages: 0 });
//   };

//   openModal = (src, alt) => {
//     this.setState({ largeImageURL: src, tabs: alt, showModal: true });
//   };

//   closeMoadal = () => {
//     this.setState({ largeImageURL: null, tabs: null, showModal: false });
//   };

//   render() {
//     const {
//       images,
//       error,
//       isLoading,
//       totalImages,
//       showModal,
//       largeImageURL,
//       tags,
//     } = this.state;

//     const showButton = images.length !== totalImages && !isLoading;

//     return (
//       <Container>
//         <Section>
//           <SearchBar onSubmit={this.getQuery} />
//           {isLoading && <Loader />}
//           {images.length > 0 && (
//             <ImageGallery images={images} openModal={this.openModal} />
//           )}
//           {error && <p>{error}</p>}
//           {showButton && <LoadMore onClick={this.addPage} />}
//           {showModal && (
//             <Modal src={largeImageURL} alt={tags} onClose={this.closeMoadal} />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
