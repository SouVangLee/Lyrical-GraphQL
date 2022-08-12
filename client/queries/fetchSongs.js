import { gql } from '@apollo/client';

// defining a query
const FETCH_SONGS = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export default FETCH_SONGS;
