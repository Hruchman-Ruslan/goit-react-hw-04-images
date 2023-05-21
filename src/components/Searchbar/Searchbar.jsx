import PropTypes from 'prop-types';
import { Button, Form, Header, Span, Input } from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.search.value.toLocaleLowerCase().trim();

    if (!query) {
      return;
    }

    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Span>Search</Span>
        </Button>

        <Input type="text" name="search" />
      </Form>
    </Header>
  );
};

// export class SearchBar extends Component {
//   handleSubmit = e => {
//     e.preventDefault();

//     const query = e.target.elements.search.value.toLocaleLowerCase().trim();

//     if (!query) {
//       return;
//     }

//     this.props.onSubmit(query);
//   };

//   render() {
//     return (
//       <Header>
//         <Form onSubmit={this.handleSubmit}>
//           <Button type="submit">
//             <Span>Search</Span>
//           </Button>

//           <Input type="text" name="search" />
//         </Form>
//       </Header>
//     );
//   }
// }

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
