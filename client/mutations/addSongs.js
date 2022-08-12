import { gql } from "@apollo/client";
// defining a mutation
const ADD_SONGS = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default ADD_SONGS;