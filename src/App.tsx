import { useState } from "react";
import "./App.css";
import ActiveNotes from "./components/active-notes";
import CreateNotes from "./components/create-notes";
import Navbar from "./components/navbar";
import { getInitialData } from "./utils/data";

function App() {
  const [notes, setNotes] = useState(getInitialData());

  const addNote = (title: string, body: string) => {
    const newNote = {
      id: notes.length + 1,
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false
    };
    setNotes([...notes, newNote]);
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
        <CreateNotes addNote={addNote}/>
      </div>
      <ActiveNotes notes={notes} />
    </>
  );
}

export default App;
