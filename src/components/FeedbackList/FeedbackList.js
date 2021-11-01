import React from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { useSelector, useDispatch } from "react-redux";
import commentActions from "../../redux/comment/comment-actions";
import { getComments, getFilter } from "../../redux/comment/comment-selectors";

export default function FeedbackList() {
  const comments = useSelector(getComments);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredComments = comments.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredComments.map(({ id, name, comment, date, clinic }) => (
        <li key={id}>
          {name}: {comment} :{date} : {clinic}
          <button
            // className={s.buttonDelete}
            type="button"
            onClick={() => dispatch(commentActions.deleteComment(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
