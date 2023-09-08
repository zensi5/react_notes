import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.scss";
import NotesList from "./Components/NotesList/NotesList";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";

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
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "darkMode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
