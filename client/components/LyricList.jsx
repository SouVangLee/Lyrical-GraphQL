import React from 'react';
import Lyric from './Lyric';

const LyricList = (props) => {
  const renderLyrics = props.lyrics.map(({ id, content, likes}) => {
    return (
      <Lyric key={id} id={id} content={content} likes={likes} />
    );
  });

  return (
    <div className="lyric-list-container">
      {renderLyrics}
    </div>
  )
};

export default LyricList;