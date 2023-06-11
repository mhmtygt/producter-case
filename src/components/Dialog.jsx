import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { customAlphabet } from "nanoid";

import { addTask } from "../redux/slices/itemSlice";

export default function Dialog({ open, setOpen }) {
  const dispatch = useDispatch();
  const taskRef = React.useRef();
  const nanoid = customAlphabet("1234567890", 2);
  const commentCount = customAlphabet("123456789", 2);

  const handleClose = () => {
    clearinput();
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = taskRef.current.value.trim();
    if (title !== "") {
      dispatch(
        addTask({
          id: nanoid().toString(),
          title: title,
          profile: nanoid(),
          commentCount: commentCount(),
          priority: nanoid(),
        })
      );
      clearinput();
    }
  };

  const clearinput = () => {
    document.getElementById("task").value = "";
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
