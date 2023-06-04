import React from "react";

import { Icon } from "@iconify/react";

export default function Form({ handleAddClick }) {
  return (
    <button onClick={handleAddClick}>
      <Icon width={20} height={20} icon="pepicons-pencil:plus" />
      Add Task
    </button>
  );
}
