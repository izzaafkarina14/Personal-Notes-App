import "./App.css";
import CreateNotes from "./components/create-notes/createNotes";
import Navbar from "./components/navbar";

function App() {
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
        <CreateNotes />
      </div>
    </>
  );
}

export default App;
