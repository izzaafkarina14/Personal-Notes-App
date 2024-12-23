import "./App.css";
import ActiveNotes from "./components/active-notes";
import CreateNotes from "./components/create-notes";
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
      <ActiveNotes />
    </>
  );
}

export default App;
