import React from 'react';
import { useQuery, useMutation, NetworkStatus } from '@apollo/client';
import { Link } from 'react-router-dom'; 
import FETCH_ALL_SONGS from '../queries/fetchAllSongs'
import DELETE_SONG from '../mutations/deleteSong';

const SongList = ( props ) => {
  const { data, loading, error, networkStatus } = useQuery(FETCH_ALL_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>

  const handleDeleteSong = (id) => {
    deleteSong({ 
      variables: { id },
      refetchQueries: [{ query: FETCH_ALL_SONGS}],
    });
  };
 
  const renderSongs = data.songs.map(({ id, title }) => {
    return (
      <div key={`${id}-${title}`} className="song">
        <Link to={`song/${id}`}>{ title }</Link>
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