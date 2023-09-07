import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.scss";
import NotesList from "./Components/NotesList/NotesList";
import Search from "./Components/Search/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "first note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "second note",
      date: "17/04/2021",
    },
    {
      id: nanoid(),
      text: "third note",
      date: "18/04/2021",
    },
    {
      id: nanoid(),
      text: "third note",
      date: "18/04/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Search />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
