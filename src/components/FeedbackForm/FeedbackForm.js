import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import { useSelector, useDispatch } from "react-redux";
import commentActions from "../../redux/comment/comment-actions";
import { getComments } from "../../redux/comment/comment-selectors";

import "react-datepicker/dist/react-datepicker.css";

// import Calendar from "../Calendar/Calendar";
import s from "./FeedbackForm.module.css";

function FeedbackForm() {
  const { register } = useForm();
  // const onSubmit = (data) => console.log(data);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  // const [date, setDate] = useState("");
  const [clinic, setClinic] = useState("");
  const comments = useSelector(getComments);
  const dispatch = useDispatch();

  // const handleContactData = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "name":
  //       setName(value);
  //       break;

  //     case "number":
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const checkExistAndAdd = (newComment) => {
    comments.some(
      (comment) =>
        comment.name.toLocaleLowerCase() ===
          newComment.name.toLocaleLowerCase() ||
        comments.some((comment) => comment.comment === newComment.comment) ||
        comments.some((comment) => comment.clinic === newComment.clinic) ||
        comments.some((comment) => comment.date === newComment.date)
    );
    // ? alert(
    //     `Friend ${newContact.name} or number ${newContact.number} is alredy exist`
    //   )
    dispatch(commentActions.addComment(newComment));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkExistAndAdd({ name, comment, clinic, date });
    setName("");
    setComment("");
    setClinic("");
    setDate("");
  };

  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label>
        Ваше ім’я та прізвище
        <input
          // value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
          placeholder="Имя и Фамилия"
          // onChange={handleContactData}
          {...register("name")}
        />
      </label>
      <label>
        Ваш email
        <input
          // value={email}
          type="text"
          name="email"
          // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          title="Email может состоять только из букв, и с символом @ "
          required
          placeholder="user@mail.com"
          // onChange={handleContactData}
          {...register("email")}
        />
      </label>
      <p>Дата останнього візиту в клініку:</p>
      {/* <Calendar /> */}
      <div {...register("date")}>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />
      </div>
      <select {...register("clinic")}>
        <option value="choiseClinic">Виберіть адресу клініки</option>
        <option value="Hodosivka">Ходосівка</option>
        <option value="Kapitanivka">Капітанівка</option>
      </select>

      <section>
        <p>
          Як швидко Вам вдалося зв’язатися з клінікою та/чи записатися на
          прийом?
        </p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="registration"
            value="1"
            // checked={this.registration === 1}
            {...register("registration")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="registration"
            value="2"
            // checked={this.registration === 2}
            {...register("registration")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="registration"
            value="3"
            // checked={this.registration === 3}
            {...register("registration")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="registration"
            value="4"
            // checked={this.registration === 4}
            {...register("registration")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="registration"
            value="5"
            // checked={this.registration === 5}
            {...register("registration")}
          />
        </label>
      </section>
      <h2>Оцініть роботу рецепції:</h2>
      <section>
        <p>- швидкість та точність роботи адміністратора?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="speedAdmin"
            value="1"
            {...register("speedAdmin")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="speedAdmin"
            value="2"
            {...register("speedAdmin")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="speedAdmin"
            value="3"
            {...register("speedAdmin")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="speedAdmin"
            value="4"
            {...register("speedAdmin")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="speedAdmin"
            value="5"
            {...register("speedAdmin")}
          />
        </label>
      </section>
      <section>
        <p>- чи був адміністратор ввічливим?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="niceAdmin"
            value="1"
            {...register("niceAdmin")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="niceAdmin"
            value="2"
            {...register("niceAdmin")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="niceAdmin"
            value="3"
            {...register("niceAdmin")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="niceAdmin"
            value="4"
            {...register("niceAdmin")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="niceAdmin"
            value="5"
            {...register("niceAdmin")}
          />
        </label>
      </section>
      <h2>Оцініть роботу лікаря:</h2>
      <label>
        Зазначте ПІБ лікаря
        <input
          // value={name}
          type="text"
          name="nameDoctor"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
          placeholder="ПІБ лікаря"
          // onChange={handleContactData}
          {...register("nameDoctor")}
        />
      </label>
      <section>
        <p>- чи був лікар уважним до Ваших скарг?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="carefulDoctor"
            value="1"
            {...register("carefulDoctor")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="carefulDoctor"
            value="2"
            {...register("carefulDoctor")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="carefulDoctor"
            value="3"
            {...register("carefulDoctor")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="carefulDoctor"
            value="4"
            {...register("carefulDoctor")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="carefulDoctor"
            value="5"
            {...register("carefulDoctor")}
          />
        </label>
      </section>
      <section>
        <p>- чи надав лікар вичерпний коментар при оцінці Вашого стану?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="ordersDoctor"
            value="1"
            {...register("ordersDoctor")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="ordersDoctor"
            value="2"
            {...register("ordersDoctor")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="ordersDoctor"
            value="3"
            {...register("ordersDoctor")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="ordersDoctor"
            value="4"
            {...register("ordersDoctor")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="ordersDoctor"
            value="5"
            {...register("ordersDoctor")}
          />
        </label>
      </section>
      <section>
        <p>- чи надав лікар вичерпний коментар до своїх призначень?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="prescriptionDoctor"
            value="1"
            {...register("prescriptionDoctor")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="prescriptionDoctor"
            value="2"
            {...register("prescriptionDoctor")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="prescriptionDoctor"
            value="3"
            {...register("prescriptionDoctor")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="prescriptionDoctor"
            value="4"
            {...register("prescriptionDoctor")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="prescriptionDoctor"
            value="5"
            {...register("prescriptionDoctor")}
          />
        </label>
      </section>
      <section>
        <p>- чи був лікар ввічливим?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="respectfulDoctor"
            value="1"
            {...register("respectfulDoctor")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="respectfulDoctor"
            value="2"
            {...register("respectfulDoctor")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="respectfulDoctor"
            value="3"
            {...register("respectfulDoctor")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="respectfulDoctor"
            value="4"
            {...register("respectfulDoctor")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="respectfulDoctor"
            value="5"
            {...register("respectfulDoctor")}
          />
        </label>
      </section>
      <h2>Оцініть порядок прийому та умови клініки:</h2>
      <section>
        <p>- чи був Ваш прийом добре організованим?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="clinicOrganisation"
            value="1"
            {...register("clinicOrganisation")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="clinicOrganisation"
            value="2"
            {...register("clinicOrganisation")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="clinicOrganisation"
            value="3"
            {...register("clinicOrganisation")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="clinicOrganisation"
            value="4"
            {...register("clinicOrganisation")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="clinicOrganisation"
            value="5"
            {...register("clinicOrganisation")}
          />
        </label>
      </section>
      <section>
        <p>- чи було Ваше перебування в клініці зручним?</p>
        <label>
          {" 1 "}
          <input
            type="radio"
            name="clinicStay"
            value="1"
            {...register("clinicStay")}
          />
        </label>
        <label>
          {" 2 "}
          <input
            type="radio"
            name="clinicStay"
            value="2"
            {...register("clinicStay")}
          />
        </label>
        <label>
          {" 3 "}
          <input
            type="radio"
            name="clinicStay"
            value="3"
            {...register("clinicStay")}
          />
        </label>
        <label>
          {" 4 "}
          <input
            type="radio"
            name="clinicStay"
            value="4"
            {...register("clinicStay")}
          />
        </label>
        <label>
          {" 5 "}
          <input
            type="radio"
            name="clinicStay"
            value="5"
            {...register("clinicStay")}
          />
        </label>
      </section>
      <h2>Маєте ще щось сказати? Лишіть Ваш коментар:</h2>
      <textarea
        className={s.comment}
        type="text"
        name="comment"
        rows="10"
        cols="55"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Коментар может состоять только из букв, апострофа, тире и пробелов."
        required
        placeholder="Будь ласка, лишіть Ваш коментар"
        {...register("comment")}
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
}
export default FeedbackForm;
