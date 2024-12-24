import { Note, showFormattedDate } from "../../utils/data";
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
          <p className={styles.emptyMessage}>Tidak ada catatan</p>
        ) : (
          <div className={styles.notesList}>
            {notes.map((note) => (
              <div className={styles.notesCard} key={note.id}>
                <div className={styles.noteCardContect}>
                  <h3>{note.title}</h3>
                  <p className={styles.date}>
                    {showFormattedDate(note.createdAt)}
                  </p>
                  <p className={styles.noteBody}>{note.body}</p>
                </div>
                <div className={styles.noteCardAction}>
                  <button
                    className={styles.delete}
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.move}
                    onClick={() => unarchiveNote(note.id)}
                  >
                    Pindahkan
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
