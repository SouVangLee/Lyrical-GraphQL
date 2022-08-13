import { gql } from '@apollo/client';

// defining a query
const FETCH_ALL_SONGS = gql`
  query getAllSongs {
    songs {
      id
      title
    }
  }
`;

export default FETCH_ALL_SONGS;
