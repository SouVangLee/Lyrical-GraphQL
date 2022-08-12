import { gql } from "@apollo/client";
// defining a mutation
const ADD_SONG = gql`
  mutation addSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default ADD_SONG;