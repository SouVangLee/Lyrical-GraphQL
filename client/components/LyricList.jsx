import React from 'react';

const LyricList = (props) => {
  const renderLyrics = props.lyrics.map(({ id, content, likes }) => {
    return (
      <div key={id} className="lyric-container">
        <div>{ content }</div>
        <div>{ likes }</div>
      </div>
    );
  });

  return (
    <div className="lyric-list-container">
      {renderLyrics}
    </div>
  )
};

export default LyricList