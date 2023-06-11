import React from "react";

import SearchIcon from "../assets/search_icon.svg";
import FilterIcon1 from "../assets/filter_icon_1.svg";
import FilterIcon2 from "../assets/filter_icon_2.svg";
import PlusIcon from "../assets/plus_icon.svg";

import IconButton from "./IconButton";
import AddButton from "./AddButton";

export default function MainHeader({ handleAddClick }) {
  return (
    <div className="main-header">
      <div className="filter-section">
        <div className="search-input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <IconButton className="icon-large">
          <FilterIcon1 />
        </IconButton>
        <IconButton className="icon-large">
          <FilterIcon2 />
        </IconButton>
      </div>

      <div className="add-button">
        <AddButton handleAddClick={handleAddClick}>
          <PlusIcon />
        </AddButton>
      </div>
    </div>
  );
}
