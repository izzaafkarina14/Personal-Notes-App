import { Note, showFormattedDate } from "../../utils/data";
import styles from "./style.module.css";

type ActiveNotesProps = {
  notes: Note[];
  deleteNote: (id: number) => void;
  archiveNote: (id: number) => void;
};

export default function ActiveNotes({
  notes,
  deleteNote,
  archiveNote,
}: ActiveNotesProps) {
  return (
    <>
      <div className={styles.activeNotes}>
        <h2>Catatan Aktif</h2>
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
                    onClick={() => {
                      deleteNote(note.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.archive}
                    onClick={() => {
                      archiveNote(note.id);
                    }}
                  >
                    Arsipkan
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
