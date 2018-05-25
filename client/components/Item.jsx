import React from 'react';

function Item (props) {
  return (
    <div className='listThumbnail'>
      <img rel='prefetch' src={props.itemDetails.artworkUrl100} onClick={() => {props.changeView('item', props.itemDetails)}} /> <br />
      <p className='title'>{props.itemDetails.trackName}</p>
      <p className='author'>{props.itemDetails.artistName}</p>
    </div>
  );
}

export default Item;