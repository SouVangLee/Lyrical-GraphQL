import { gql } from "@apollo/client"
const ADD_LYRIC_TO_SONG = gql`
  mutation addLyricToSong($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default ADD_LYRIC_TO_SONG;