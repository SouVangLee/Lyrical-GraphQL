import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';

const LyricList = (props) => {
  const renderLyrics = props.lyrics.map(({ id, content }) => {
    const [showSolid, setShowSolid] = useState(false);

    const onLike = () => {
      showSolid ? setShowSolid(false) : setShowSolid(true);
    }

    return (
      <div key={id} className="lyric-container">
        <div>{ content }</div>
        <div onClick={onLike} className="like-button">
          { !showSolid ? (
            <FontAwesomeIcon icon={regularThumbsUp} />
          ) : (
            <FontAwesomeIcon icon={solidThumbsUp} />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="lyric-list-container">
      {renderLyrics}
    </div>
  )
};

export default LyricList;