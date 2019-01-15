const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('note title already in use')
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s)`)
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log("note found");
        notes.logNote(note);
    } else {
        console.log("note is not found");
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message)
} else {
    console.log('Command not recognized');
}

