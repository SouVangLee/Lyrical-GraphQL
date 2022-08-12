import React from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { Link } from 'react-router-dom';
import FETCH_SONGS from '../queries/fetchSongs'

const SongList = ( props ) => {
  const { loading, error, data, networkStatus } = useQuery(
    FETCH_SONGS,
    {
      notifyOnNetworkStatusChange: true,
    });
  // console.log('networkStatus', networkStatus);
  // console.log('___loading', loading);
  // console.log('___error', error);
  // console.log('___data', data);
  console.log('props', props);

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>

  const renderSongs = data.songs.map(({ id, title }) => {
    return (
      <div key={`${id}-${title}`} className="song">
        {title}
      </div>
    );
  });

  return (
    <>
      <div className="song-list">
        {renderSongs}
      </div>
      <div>
        <Link to="songs/new" className="create-new-song-button">+</Link>
      </div>
    </>
  )
}

export default SongList;