import React from 'react';
import Search from './Search.jsx';
import Item from './Item.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      totalList: [],
      condensedList: [],
    };
    this.renderStore = this.renderStore.bind(this);
  }

  next() {
    let previousStart = this.state.start;
    let nextStart = Math.min(this.state.totalList.length - 20, previousStart + 20);
    let shortList = this.state.totalList.slice(nextStart, nextStart + 20);
    this.setState({'start': nextStart});
    this.setState({'condensedList': shortList});
  };

  previous() {
    let previousStart = this.state.start;
    let nextStart = Math.max(0, previousStart - 20);
    let shortList = this.state.totalList.slice(nextStart, nextStart + 20);
    this.setState({'start': nextStart});
    this.setState({'condensedList': shortList});
  };

  renderStore(result) {
    let start = this.state.start;
    this.setState({ totalList: result });
    this.setState({ condensedList: result.slice(start, start + 20) });
  }

  render() {
    return (
      <div className="content_body">
        <Search renderStore={this.renderStore} />
          <div className="book_list">
            {this.state.condensedList.map((itemFromDummy, index) => {
              let itemNumber = index + this.state.start + 1;
              return <Item
                itemDetails={itemFromDummy}
                itemNumber={itemNumber}
                changeView={this.props.changeView}
              />
            })}
          </div>
        <br />
        <div className="buttons">
          <button onClick={() => {this.previous()}}>Previous 20</button>
          <button onClick={() => {this.next()}}>Next 20</button>
        </div>
      </div>
    )
  }
}

export default List;