import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addComment = createAction("comment/add", (input) => ({
  payload: {
    id: uuidv4(),
    name: input.name,
    comment: input.comment,
    date: input.date,
    clinic: input.clinic,
  },
}));
const getComments = createAction("comment/get");
const deleteComment = createAction("comment/delete");
const changeFilter = createAction("comment/changeFilter");

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { addComment, deleteComment, changeFilter, getComments };
