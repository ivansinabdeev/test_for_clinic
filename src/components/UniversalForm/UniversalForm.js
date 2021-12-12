import React from "react";

import s from "./UniversalForm.module.css";

// Как реализовать кнопки внутри компонента?
// "Да" и "Нет" и "крестик при закрытии"
// Реально ли сделать это на хуках или только классах?

export default function UniversalForm() {
  return (
    <form>
      <p className={s.question}>Вы уверены?</p>
    </form>
  );
}
