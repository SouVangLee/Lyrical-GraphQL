import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import LIKE_LYRIC from '../mutations/likeLyric';

const LyricList = (props) => {
  const renderLyrics = props.lyrics.map(({ id, content, likes }) => {
    const [showSolid, setShowSolid] = useState(false);
    const [likeLyric] = useMutation(LIKE_LYRIC);

    const onLike = () => {
      if (showSolid) return;
      if (!showSolid) {
        setShowSolid(true);
        /* 
          likeLyric is the name of the actual mutation inside of gql:
          likeLyric(id: $id) {
            id
            likes
          }
        */
        likeLyric({ 
          variables: { id },
          optimisticResponse: {
            likeLyric: {
              id,
              likes: likes + 1,
              __typename: "LyricType"
            }
          }
        });
      };
    };

    return (
      <div key={id} className="lyric-container">
        <div>{ content }</div>
        <div className="likes-container">
          <div onClick={onLike} className="like-button">
            { !showSolid ? (
              <FontAwesomeIcon icon={regularThumbsUp} />
            ) : (
              <FontAwesomeIcon icon={solidThumbsUp} />
            )}
          </div>
          <div>{likes}</div>
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