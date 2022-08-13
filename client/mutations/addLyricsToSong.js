import { gql } from "@apollo/client"
const ADD_LYRICS_TO_SONG = gql`
    mutation addLyricsToSong($content: String, $songId: ID!) {
        addLyricsToSong(content: $content, songId: $songId) {
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

export default ADD_LYRICS_TO_SONG;