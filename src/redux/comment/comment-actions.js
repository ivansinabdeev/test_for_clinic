// import { v4 as uuidv4 } from "uuid";
// import { createAction } from "@reduxjs/toolkit";

// const addComment = createAction("comment/add", (input) => ({
//   payload: {
//     id: uuidv4(),
//     name: input.name,
//     number: input.number,
//     // clinic: input.clinic,
//   },
// }));
// const getComments = createAction("comment/get");
// const deleteComment = createAction("comment/delete");
// const changeFilter = createAction("comment/changeFilter");

// /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default { addComment, deleteComment, changeFilter, getComments };

import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("comment/add", (input) => ({
  payload: {
    id: uuidv4(),
    name: input.name,
    email: input.email,
    remark: input.remark,
    date: input.date,
    clinic: input.clinic,
    registration: input.registration,
    speedAdmin: input.speedAdmin,
    niceAdmin: input.niceAdmin,
    carefulDoctor: input.carefulDoctor,
    ordersDoctor: input.ordersDoctor,
    prescriptionDoctor: input.prescriptionDoctor,
    respectfulDoctor: input.respectfulDoctor,
    clinicOrganisation: input.clinicOrganisation,
    clinicStay: input.clinicStay,
  },
}));
const getContacts = createAction("comment/get");
const deleteContact = createAction("comment/delete");
const changeFilter = createAction("comment/changeFilter");

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { addContact, deleteContact, changeFilter, getContacts };
