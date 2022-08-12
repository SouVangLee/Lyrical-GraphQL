import { gql } from "@apollo/client";

const DELETE_SONG = gql`
    mutation deleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default DELETE_SONG;