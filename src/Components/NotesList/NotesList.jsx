import React from "react";
import "./NotesList.scss";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notesList">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
