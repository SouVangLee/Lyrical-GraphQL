import React from 'react';

const LyricCreate = (props) => {
    return (
        <div>
            <h3>Add Lyrics to the song!</h3>
            <form>
                <input autoFocus type="text" placeholder='Add lyrics here!'/>
            </form>
        </div>
    );
};

export default LyricCreate;