import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import ADD_SONG from '../mutations/addSong';
import FETCH_ALL_SONGS from '../queries/fetchAllSongs';

const SongCreate = (props) => {
  const [title, setTitle] = useState('');
  const [addSong, { loading, error, data }] = useMutation(ADD_SONG, {
    refetchQueries: [{query: FETCH_ALL_SONGS}]
  });
  const navigate = useNavigate();

  if (loading) return <p>{'Submitting...'}</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  const handleSubmit = event => {
    event.preventDefault();
    addSong({variables: { title: title}})
      .then(() => navigate("/"));
    setTitle('');
  };

  return (
    <div className="create-song-container">
      <Link to="/" className='back-to-song-list' dangerouslySetInnerHTML={{__html: `\u2190` }} />
      <h3>Create a New Song</h3>
      <form 
        onSubmit={handleSubmit} 
        className="create-song-form"
      >
        <label>Song Title:</label>
        <input
          autoFocus
          type="text"
          onChange={event => setTitle(event.target.value)}
          value={title}
          placeholder={"Enter a song title here"}
        />
        <button>Add song</button>
      </form>
    </div>
  );
};

export default SongCreate;