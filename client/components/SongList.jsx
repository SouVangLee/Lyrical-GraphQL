import React from 'react';
import { useQuery, gql } from '@apollo/client';

// defining a query
const GET_SONG_LIST = gql`
  query {
    songs {
      id
      title
    }
  }
`;

const SongList = ( props ) => {
  const { loading, error, data, networkStatus } = useQuery(
    GET_SONG_LIST,
    {
      notifyOnNetworkStatusChange: true,
    });
  console.log('networkStatus', networkStatus);
  console.log('___loading', loading);
  console.log('___error', error);
  console.log('___data', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>

  const renderSongs = data.songs.map(({ id, title }) => {
    return (
      <div key={`${id}-${title}`}>
        {title}
      </div>
    );
  });

  return (
    <div>
      {renderSongs}
    </div>
  )
}

export default SongList;