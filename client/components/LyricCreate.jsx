import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_LYRIC_TO_SONG from '../mutations/addLyricsToSong';

const LyricCreate = (props) => {
  const { songId } = props;
  const [lyrics, setLyrics] = useState('');
  const [addLyricsToSong] = useMutation(ADD_LYRIC_TO_SONG);

  const handleSubmit = e => {
    e.preventDefault();
    addLyricsToSong({ 
      variables: {
        content: lyrics,
        songId
      },
    })
      .then(res => console.log('res', res));
    setLyrics('');
  }

  
  return (
      <div>
        <h3>Add Lyrics to the song!</h3>
        <form onSubmit={handleSubmit}>
          <input 
            autoFocus 
            type="text" 
            placeholder='Add lyrics here!'
            onChange={(e) => setLyrics(e.target.value)}
            value={lyrics}
          />
          <button>Add Lyrics!</button>
        </form>
      </div>
    );
};

export default LyricCreate;