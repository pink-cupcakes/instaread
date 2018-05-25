import React from 'react';
import Parser from 'html-react-parser';

function ItemDetail (props) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const publishDate = new Date(props.item.releaseDate);
  return (
    <div className='detail_container'>
      <button className='back_button' onClick={() => {props.changeView('list')}}>Back</button>
      <div className='item_detail'>
        <div className='left_column'>
          <a href={props.item.trackViewUrl}><img src={props.item.artworkUrl100}></img></a>
          <p><b>Title:</b> {props.item.trackName}</p>
          <p><b>Author:</b> {props.item.artistName}</p>
          <p><b>Rating:</b> {props.item.averageUserRating}</p>
          <p><b>Published:</b> {publishDate.toLocaleDateString('en-US', options)}</p>
        </div>
        <div className='right_column'>
          <p>Description: <br/>{Parser(props.item.description)}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;