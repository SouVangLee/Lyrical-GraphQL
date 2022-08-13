import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_LYRIC_TO_SONG from '../mutations/addLyricToSong';

const LyricCreate = (props) => {
  const { songId } = props;
  const [content, setContent] = useState('');
  const [addLyricsToSong] = useMutation(ADD_LYRIC_TO_SONG);

  const handleSubmit = e => {
    e.preventDefault();
    addLyricsToSong({ 
      variables: {
        content,
        songId
      },
    });
    setContent('');
  }

  return (
      <div>
        <h3>Add Lyrics to the song!</h3>
        <form onSubmit={handleSubmit}>
          <input 
            autoFocus 
            type="text" 
            placeholder='Add lyrics here!'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button>Add Lyrics!</button>
        </form>
      </div>
    );
};

export default LyricCreate;