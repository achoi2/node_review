console.log('starting notes.js');

let addNote = (title, body) => {
    console.log('adding note', title, body);
};

let getAll = () => {
    console.log('getting all notes');
};

let getNote = (title) => {
    console.log('getting note', title);
};

let removeNote = (title) => {
    console.log('removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
