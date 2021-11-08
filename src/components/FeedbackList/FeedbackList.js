// import React from "react";
// // import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { useSelector, useDispatch } from "react-redux";
// import commentActions from "../../redux/comment/comment-actions";
// import { getComments, getFilter } from "../../redux/comment/comment-selectors";

// export default function FeedbackList() {
//   const comments = useSelector(getComments);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const filteredComments = comments.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul>
//       <h2>Список коментов</h2>
//       {filteredComments.map(({ id, name, comment, date, clinic }) => (
//         <li key={id}>
//           {name}: {comment} :{date} : {clinic}
//           <button
//             // className={s.buttonDelete}
//             type="button"
//             onClick={() => dispatch(commentActions.deleteComment(id))}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

import React from "react";
// import PropTypes from "prop-types";
// import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/comment/comment-actions";
import { getContacts, getFilter } from "../../redux/comment/comment-selectors";
import Moment from "react-moment";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ clinic }) =>
    clinic.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(contacts);
  // const dateToFormat = "1976-04-19T12:59-0500";

  return (
    <ul>
      {filteredContacts.map(({ id, name, remark, startDate, clinic }) => (
        <li key={id}>
          {name} : {remark} :<Moment format="YYYY/MM/DD">{startDate}</Moment> :
          {clinic}
          <button
            // className={s.buttonDelete}
            type="button"
            onClick={() => dispatch(phonebookActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
