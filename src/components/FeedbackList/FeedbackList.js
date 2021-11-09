import React from "react";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/comment/comment-actions";
import { getContacts, getFilter } from "../../redux/comment/comment-selectors";
import Moment from "react-moment";
import { HiAnnotation } from "react-icons/hi";

import s from "./FeedbackList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ clinic }) =>
    clinic.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(contacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, remark, startDate, clinic }) => (
        <li key={id} className={s.comment}>
          <div className={s.user}>
            <div className={s.userName}>
              <HiAnnotation className={s.icon} />
              <span className={s.name}>Користувач(-ка)</span>
              <span className={s.name}>{name}</span>
            </div>
            <p className={s.remark}>{remark}</p>
          </div>

          <div className={s.dateComment}>
            <span className={s.clinic}>Клiнiка: {clinic},</span>
            <span className={s.dateVisit}>
              дата вiзиту:
              <Moment format="DD/MM/YYYY">{startDate}</Moment>
            </span>
          </div>
          <button
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
