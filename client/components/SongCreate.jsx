import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

// defining a mutation
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
  const navigate = useNavigate();
  // console.log('addSong', addSong);
  // console.log('___loading', loading);
  // console.log('___error', error);
  // console.log('___data', data);

  if (loading) return <p>{'Submitting...'}</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;
  // console.log('useNavigate', navigate);

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