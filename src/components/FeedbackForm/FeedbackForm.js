import React from "react";
import { useForm } from "react-hook-form";

import s from "./FeedbackForm.module.css";

function FeedbackForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // reset = () => {
  //   this.setState({ name: "", email: "" });
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.Form}>
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
      <button type="submit">Отправить</button>
    </form>
  );
}
export default FeedbackForm;
