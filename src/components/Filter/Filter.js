import React, { useState } from "react";
import { useSelector } from "react-redux";
// import phonebookActions from "../../redux/comment/comment-actions";
import { getContacts } from "../../redux/comment/comment-selectors";
import s from "./Filter.module.css";

export default function Filter() {
  // const [clinic, setClinic] = useState("");
  const contacts = useSelector(getContacts);
  //   const dispatch = useDispatch();
  const [filtered, setFiltered] = useState(contacts);

  function filterClinic(clinic) {
    if (clinic === "all") {
      setFiltered(contacts);
    }
  }
  return (
    <label className={s.filter}>
      Виберіть адресу клініки
      <select
        name="clinic"
        className={s.select}
        // onChange={(e) => {
        //   const selectClinic = e.currentTarget.value;
        //   setClinic(selectClinic);
        // }}
        value={clinic}
        // onChange={handleContactData}
      >
        <option
          value="all"
          disabled
          selected
          onClick={() => filterClinic("all")}
        >
          Виберіть адресу клініки
        </option>
        <option value="Hodosivka" onClick={() => filterClinic(Hodosivka)}>
          Ходосівка
        </option>
        <option value="Kapitanivka" onClick={() => filterClinic(Kapitanivka)}>
          Капітанівка
        </option>
      </select>
    </label>
  );
}

// import React from "react";

// import { useSelector, useDispatch } from "react-redux";
// import phonebookActions from "../../redux/comment/comment-actions";
// import { getFilter } from "../../redux/comment/comment-selectors";

// export default function Filter() {
//   const inputValue = useSelector(getFilter);
//   const dispatch = useDispatch();
//   return (
//     <div className={s.select}>
//       <label>
//         Find contacts by name
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) =>
//             dispatch(phonebookActions.changeFilter(e.target.value))
//           }
//         />
//       </label>
//     </div>
//   );
// }
