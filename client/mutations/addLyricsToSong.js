import { gql } from "@apollo/client"
const ADD_LYRIC_TO_SONG = gql`
    mutation addLyricToSong($content: String, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            title
            lyrics {
                id
                likes
                content
            }
        }
    }
`;

export default ADD_LYRIC_TO_SONG;