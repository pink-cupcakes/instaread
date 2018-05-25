import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Game of Thrones',
    };
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  };

  searchBooks() {
    axios.get('/books', {params: {keyword: this.state.text}})
      .then((res) => {
        this.props.renderStore(res.data);
        this.setState({ text: '' })
      })
      .catch((error) => {
        console.log(error);
      })
  };

  componentWillMount() {
    this.searchBooks();
  };

  render() {
    return (
      <div className="search_container">
        <h4>If knowledge is power, we've got the abridged version of world domination.</h4>
        <input
          className="search_bar"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
          onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.searchBooks();
              }
          }}>
        </input>
      </div>
    )
  }
};

export default Search;