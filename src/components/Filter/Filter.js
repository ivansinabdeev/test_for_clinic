import React from "react";

import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/comment/comment-actions";
import { getFilter } from "../../redux/comment/comment-selectors";

import s from "./Filter.module.css";

export default function Filter() {
  const inputValue = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <label>
        Будь ласка впишiть клініку
        <input
          type="text"
          className={s.select}
          value={inputValue}
          onChange={(e) =>
            dispatch(phonebookActions.changeFilter(e.target.value))
          }
        />
      </label>
    </div>
  );
}
