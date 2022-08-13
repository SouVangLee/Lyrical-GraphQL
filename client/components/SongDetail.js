import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import FETCH_SONG from '../queries/fetchSong';

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
      <h3>{title}</h3>
    </div>
  )
};

export default SongDetail;