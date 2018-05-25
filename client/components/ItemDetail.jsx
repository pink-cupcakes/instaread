import React from 'react';
import Parser from 'html-react-parser';

function ItemDetail (props) {
  return (
    <div className='detail_container'>
      <button className='back_button' onClick={() => {props.changeView('list')}}>Back</button>
      <div className='item_detail'>
        <div className='left_column'>
          <a href={props.item.trackViewUrl}><img src={props.item.artworkUrl100}></img></a>
          <p>Title: {props.item.trackName}</p>
          <p>Author: {props.item.artistName}</p>
        </div>
        <div className='right_column'>
          <p>Description: <br/>{Parser(props.item.description)}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;