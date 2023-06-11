import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { customAlphabet } from "nanoid";

import { addTask } from "../redux/slices/itemSlice";
import ProfileIcon1 from "../assets/profile_icon_1.svg";
import ProfileIcon2 from "../assets/profile_icon_2.svg";
import ProfileIcon3 from "../assets/profile_icon_3.svg";

import UrgentTaskIcon from "../assets/urgent_task_icon.svg";
import MediumTaskIcon from "../assets/medium_task_icon.svg";
import LowTaskIcon from "../assets/low_task_icon.svg";

function generateProfile(random) {
  if (random % 2 === 0) return { icon: <ProfileIcon1 /> };
  else if (random % 3 === 0) return { icon: <ProfileIcon2 /> };
  else return { icon: <ProfileIcon3 /> };
}
function generateUrgentStatus(random) {
  if (random % 2 === 0) return { priority: <UrgentTaskIcon /> };
  else if (random % 3 === 0) return { priority: <MediumTaskIcon /> };
  else return { priority: <LowTaskIcon /> };
}

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
          profile: generateProfile(nanoid()).icon,
          commentCount: commentCount(),
          priority: generateUrgentStatus(nanoid()).priority,
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
