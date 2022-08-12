import React from 'react';
import { useQuery, useMutation, NetworkStatus } from '@apollo/client';
import { Link } from 'react-router-dom';
import FETCH_SONGS from '../queries/fetchSongs'
import DELETE_SONG from '../mutations/deleteSong';

const SongList = ( props ) => {
  const { data, loading, error, networkStatus } = useQuery(FETCH_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG, {
    refetchQueries: [{query: FETCH_SONGS}]
  });

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>

  const handleDeleteSong = (id) => {
    console.log('__id', id);
    // deleteSong({ variables: { id }})
    //   .then(res => console.log('__res', res));
  };
 
  const renderSongs = data.songs.map(({ id, title }) => {
    return (
      <div key={`${id}`} className="song">
        {title}-----------------{id}
        <button onClick={() => handleDeleteSong(id)}>delete</button>
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