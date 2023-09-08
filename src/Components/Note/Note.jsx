import React from "react";
import "./Note.scss";
import { MdDeleteForever } from "react-icons/md";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="noteFooter">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="deleteIcon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
