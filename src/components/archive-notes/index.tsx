import { Note } from "../../utils/data";
import styles from "./style.module.css";

type ArchiveNotesProps = {
  notes: Note[];
  deleteNote: (id: number) => void;
  unarchiveNote: (id: number) => void;
};

export default function ArchiveNotes({
  notes,
  deleteNote,
  unarchiveNote,
}: ArchiveNotesProps) {
  return (
    <>
      <div className={styles.archiveNotes}>
        <h2>Arsip</h2>
        {notes.length === 0 ? (
          <p>Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
              <button onClick={() => unarchiveNote(note.id)}>Pindahkan</button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
