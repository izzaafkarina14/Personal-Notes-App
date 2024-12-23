import { useState } from "react";
import styles from "./style.module.css";

export default function CreateNotes() {
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputLength = event.target.value.length;
    setRemainingChars(50 - inputLength);
  };
  return (
    <>
      <div className={styles.createWrapper}>
        <h2 className={styles.hero}>Buat Catatan</h2>
        <div className={styles.inputWrapper}>
          <p>Sisa Karakter: {remainingChars}</p>
          <div>
            <input
              type="text"
              placeholder="Ini adalah judul ..."
              maxLength={50}
              onChange={handleTitleChange}
            />
            <br />
            <input
              type="textarea"
              placeholder="Tuliskan catatanmu di sini ..."
            />
            <br />
            <button type="submit">Buat</button>
          </div>
        </div>
      </div>
    </>
  );
}
