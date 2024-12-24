import { useState } from "react";
import "./App.css";
import ActiveNotes from "./components/active-notes";
import CreateNotes from "./components/create-notes";
import Navbar from "./components/navbar";
import { getInitialData } from "./utils/data";
import ArchiveNotes from "./components/archive-notes";

type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
};

function App() {
  const [notes, setNotes] = useState<Note[]>(getInitialData());
  const [archivedNotes, setArchivedNotes] = useState<Note[]>([]);

  const addNote = (title: string, body: string) => {
    const newNote = {
      id: notes.length + 1,
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id: number) => {
    const noteToArchive = notes.find((note) => note.id === id);
    if (noteToArchive) {
      setNotes(notes.filter((note) => note.id !== id));
      setArchivedNotes([
        ...archivedNotes,
        { ...noteToArchive, archived: true },
      ]);
    }
  };

  const unarchiveNote = (id: number) => {
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    if (noteToUnarchive) {
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
      setNotes([...notes, { ...noteToUnarchive, archived: false }]);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          maxWidth: "100vw",
          justifyContent: "center",
          margin: "16px auto",
        }}
      >
        <CreateNotes addNote={addNote} />
      </div>
      <ActiveNotes
        notes={notes}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
      />
      <ArchiveNotes
        notes={archivedNotes}
        deleteNote={deleteNote}
        unarchiveNote={unarchiveNote}
      />
    </>
  );
}

export default App;
