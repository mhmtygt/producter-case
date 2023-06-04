import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addTask } from "../redux/slices/itemSlice";

export default function Dialog({ open, setOpen }) {
  const dispatch = useDispatch();
  const taskRef = React.useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskRef.current.value !== "") {
      dispatch(
        addTask({ id: nanoid().toString(), title: taskRef.current.value })
      );
      document.getElementById("task").value = "";
    }
  };

  useEffect(() => {
    const dialog = document.getElementById("dialog");

    if (open) {
      dialog.classList.remove("hidden");
    } else {
      dialog.classList.add("hidden");
    }
  }, [open]);

  return (
    <div id="dialog" className="dialog-overlay">
      <form className="dialog-box" onSubmit={handleSubmit}>
        <label>Task:</label>
        <input id="task" ref={taskRef} type="text" />
        <input type="submit" value="Add" />
        <button onClick={handleClose}>Close</button>
      </form>
    </div>
  );
}
