import React from 'react';
import Search from './Search.jsx';
import Item from './Item.jsx';
import ItemDetail from './ItemDetail.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      totalList: [],
      condensedList: [],
      view: 'list'
    };
    this.changeView = this.changeView.bind(this);
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
    if (result.length === 0) {
      alert('There were no results, please try a different search.');
    } else {
      let start = 0;
      this.setState({ totalList: result });
      this.setState({ condensedList: result.slice(start, start + 20) });
    }
  }

  changeView(newView, item) {
    this.setState({ 'view': newView });
    if (item) {
      this.setState({ 'detailItem': item });
    }
  }

  render() {
    if (this.state.view === 'list') {
      return (
        <div className="content_body">
          <Search renderStore={this.renderStore} />
            <div className="book_list">
              {this.state.condensedList.map((itemDetails, index) => {
                let itemNumber = index + this.state.start + 1;
                return <Item
                  itemDetails={itemDetails}
                  itemNumber={itemNumber}
                  changeView={this.changeView}
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
    } else {
      return (
        <div className="content_body">
          <Search renderStore={this.renderStore} />
          <ItemDetail item={this.state.detailItem} changeView={this.changeView} />
        </div>
      )      
    }
  }
}

export default List;