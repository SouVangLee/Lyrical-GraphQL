import React, { useState } from 'react';
import { useMutation, gql, NetworkStatus } from '@apollo/client';

const ADD_SONG = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`


const SongCreate = (props) => {
  const [title, setTitle] = useState('');
  const [addSong, { loading, error, data }] = useMutation(ADD_SONG);
  // console.log('addSong', addSong);
  // console.log('___loading', loading);
  // console.log('___error', error);
  // console.log('___data', data);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


  const handleSubmit = event => {
    event.preventDefault();
    addSong({variables: { title: title}});
    setTitle('');
  };

  return (
    <div className="create-song-container">
      <h3>Create a New Song</h3>
      <form 
        onSubmit={handleSubmit} 
        className="create-song-form"
      >
        <label>Song Title:</label>
        <input 
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