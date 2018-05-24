import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  searchBooks() {
    axios.get('/books', {params: {keyword: this.state.text}})
      .then((res) => {
        this.props.renderStore(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="search_container">
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