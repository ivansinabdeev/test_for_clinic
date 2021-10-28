import React from "react";
import { useForm } from "react-hook-form";

function FeedbackForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Имя и Фамилия" {...register("firstSecondName")} />
      <input placeholder="Email" {...register("email")} />
      <select {...register("clinic")}>
        <option value="choiseClinic">Виберіть адресу клініки</option>
        <option value="clinicHodosivka">Ходосівка</option>
        <option value="clinicKapitanivka">Капітанівка</option>
      </select>
      <button type="submit">Отправить</button>
    </form>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("firstName", { required: true, maxLength: 20 })} />
    //   <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
    //   <input type="number" {...register("age", { min: 18, max: 99 })} />
    //   <input type="submit" />
    // </form>
  );
}
export default FeedbackForm;
