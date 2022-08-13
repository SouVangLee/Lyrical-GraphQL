import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import FETCH_SONG from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

const SongDetail = (props) => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(FETCH_SONG, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`The song does not exist!`}</p>

  const { title } = data.song;

  return (
    <div>
      <Link 
        to="/" 
        className='back-to-song-list' 
        dangerouslySetInnerHTML={{__html: `\u2190` }} 
      />
      <h3 style={{ textAlign:"center" }}>{ title }</h3>
      <LyricCreate />
    </div>
  )
};

export default SongDetail;