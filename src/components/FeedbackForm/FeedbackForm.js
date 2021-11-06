// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// import s from "./FeedbackForm.module.css";

// function FeedbackForm() {
//   const { register } = useForm();
//   // const onSubmit = (data) =>
//   // console.log(data);

//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const [date, setDate] = useState("");
//   const [clinic, setClinic] = useState("");
//   const comments = useSelector(getComments);
//   const dispatch = useDispatch();

//   const handleContactData = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "comment":
//         setComment(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const checkExistAndAdd = (newComment) => {
//     comments.some(
//       (comment) =>
//         comment.name.toLocaleLowerCase() ===
//           newComment.name.toLocaleLowerCase() ||
//         comments.some((comment) => comment.comment === newComment.comment) ||
//         comments.some((comment) => comment.clinic === newComment.clinic) ||
//         comments.some((comment) => comment.date === newComment.date)
//     );
//     // ? alert(
//     //     `Friend ${newContact.name} or number ${newContact.number} is alredy exist`
//     //   )
//     dispatch(commentActions.addComment(newComment));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     checkExistAndAdd({ name, comment, clinic, date });
//     setName("");
//     setComment("");
//     setClinic("");
//     setDate("");
//   };

//   // const [date, setDate] = useState(new Date());
//   const handleCalendarClose = () => console.log("Calendar closed");
//   const handleCalendarOpen = () => console.log("Calendar opened");

//   return (
//     <form onSubmit={handleSubmit} className={s.Form}>
//       <label>
//         Ваше ім’я та прізвище
//         <input
//           // value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов."
//           required
//           placeholder="Имя и Фамилия"
//           onChange={handleContactData}
//           {...register("name")}
//         />
//       </label>
//       <label>
//         Ваш email
//         <input
//           // value={email}
//           type="text"
//           name="email"
//           // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
//           title="Email может состоять только из букв, и с символом @ "
//           required
//           placeholder="user@mail.com"
//           // onChange={handleContactData}
//           {...register("email")}
//         />
//       </label>
//       <p>Дата останнього візиту в клініку:</p>
//       {/* <Calendar /> */}
//       <div {...register("date")}>
//         <DatePicker
//           selected={date}
//           onChange={(date) => setDate(date)}
//           onCalendarClose={handleCalendarClose}
//           onCalendarOpen={handleCalendarOpen}
//         />
//       </div>
//       <select {...register("clinic")} onChange={handleContactData}>
//         <option value="choiseClinic">Виберіть адресу клініки</option>
//         <option value="Hodosivka">Ходосівка</option>
//         <option value="Kapitanivka">Капітанівка</option>
//       </select>

//       <h2>Оцініть роботу лікаря:</h2>
//       <label>
//         Зазначте ПІБ лікаря
//         <input
//           // value={name}
//           type="text"
//           name="nameDoctor"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов."
//           required
//           placeholder="ПІБ лікаря"
//           // onChange={handleContactData}
//           {...register("nameDoctor")}
//         />
//       </label>

//
//       <button type="submit">Отправить</button>
//     </form>
//   );
// }
// export default FeedbackForm;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/comment/comment-actions";
import { getContacts } from "../../redux/comment/comment-selectors";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import s from "./FeedbackForm.module.css";
import { ImAngry, ImSad, ImNeutral, ImSmile, ImHappy } from "react-icons/im";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  // const [date, setDate] = useState(new Date());
  const [clinic, setClinic] = useState("");
  const [registration, setRegistration] = useState("");
  const [speedAdmin, setSpeedAdmin] = useState("");
  const [niceAdmin, setNiceAdmin] = useState("");
  const [carefulDoctor, setCarefulDoctor] = useState("");
  const [ordersDoctor, setOrdersDoctor] = useState("");
  const [prescriptionDoctor, setPrescriptionDoctor] = useState("");
  const [respectfulDoctor, setRespectfulDoctor] = useState("");
  const [clinicOrganisation, setClinicOrganisation] = useState("");
  const [clinicStay, setClinicStay] = useState("");
  const [remark, setRemark] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleContactData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "date":
        setDate(value);
        break;

      case "clinic":
        setClinic(value);
        break;

      case "registration":
        setRegistration(value);
        break;

      case "speedAdmin":
        setSpeedAdmin(value);
        break;

      case "niceAdmin":
        setNiceAdmin(value);
        break;

      case "carefulDoctor":
        setCarefulDoctor(value);
        break;

      case "ordersDoctor":
        setOrdersDoctor(value);
        break;

      case "prescriptionDoctor":
        setPrescriptionDoctor(value);
        break;

      case "respectfulDoctor":
        setRespectfulDoctor(value);
        break;

      case "clinicOrganisation":
        setClinicOrganisation(value);
        break;

      case "clinicStay":
        setClinicStay(value);
        break;

      case "remark":
        setRemark(value);
        break;

      default:
        return;
    }
  };

  const checkExistAndAdd = (newContact) => {
    contacts.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase() ||
        contacts.some((contact) => contact.email === newContact.email) ||
        contacts.some((contact) => contact.remark === newContact.remark) ||
        contacts.some((contact) => contact.clinic === newContact.clinic) ||
        contacts.some((contact) => contact.date === newContact.date) ||
        contacts.some(
          (contact) => contact.registration === newContact.registration
        ) ||
        contacts.some(
          (contact) => contact.speedAdmin === newContact.speedAdmin
        ) ||
        contacts.some(
          (contact) => contact.niceAdmin === newContact.niceAdmin
        ) ||
        contacts.some(
          (contact) => contact.carefulDoctor === newContact.carefulDoctor
        ) ||
        contacts.some(
          (contact) => contact.ordersDoctor === newContact.ordersDoctor
        ) ||
        contacts.some(
          (contact) =>
            contact.prescriptionDoctor === newContact.prescriptionDoctor
        ) ||
        contacts.some(
          (contact) => contact.respectfulDoctor === newContact.respectfulDoctor
        ) ||
        contacts.some(
          (contact) =>
            contact.clinicOrganisation === newContact.clinicOrganisation
        ) ||
        contacts.some((contact) => contact.clinicStay === newContact.clinicStay)
    );
    // ? alert(
    //     `This ${newContact.name} or email ${newContact.email} is alredy exist`
    //   )
    dispatch(phonebookActions.addContact(newContact));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkExistAndAdd({
      name,
      email,
      remark,
      date,
      registration,
      speedAdmin,
      niceAdmin,
      carefulDoctor,
      ordersDoctor,
      prescriptionDoctor,
      respectfulDoctor,
      clinicOrganisation,
      clinicStay,
      clinic,
    });
    setName("");
    setEmail("");
    setDate("");
    setClinic("");
    setRegistration("");
    setSpeedAdmin("");
    setNiceAdmin("");
    setCarefulDoctor("");
    setOrdersDoctor("");
    setPrescriptionDoctor("");
    setRespectfulDoctor("");
    setClinicOrganisation("");
    setClinicStay("");
    setRemark("");
  };

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label>
        Ваше ім’я та прізвище
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Ваше ім’я"
          onChange={handleContactData}
        />
      </label>
      <label>
        Ваш email
        <input
          value={email}
          type="email"
          name="email"
          // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email должен состоять с символом @"
          required
          placeholder="user@mail.com"
          onChange={handleContactData}
        />
      </label>

      <section>
        <p>Дата останнього візиту в клініку:</p>

        <DatePicker
          value={date}
          type="date"
          name="date"
          selected={date}
          // onChange={handleContactData}
          onChange={(date) => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />
      </section>

      <label>
        Виберіть адресу клініки
        <select name="clinic" value={clinic} onChange={handleContactData}>
          <option value="" disabled>
            Виберіть адресу клініки
          </option>
          <option value="Hodosivka">Ходосівка</option>
          <option value="Kapitanivka">Капітанівка</option>
        </select>
      </label>

      <section>
        <p>
          Як швидко Вам вдалося зв’язатися з клінікою та/чи записатися на
          прийом?
        </p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="registration"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="registration"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="registration"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="registration"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="registration"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <h2>Оцініть роботу рецепції:</h2>
      <section>
        <p>- швидкість та точність роботи адміністратора?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="speedAdmin"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="speedAdmin"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="speedAdmin"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="speedAdmin"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="speedAdmin"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <p>- чи був адміністратор ввічливим?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="niceAdmin"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="niceAdmin"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="niceAdmin"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="niceAdmin"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="niceAdmin"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <p>- чи був лікар уважним до Ваших скарг?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="carefulDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="carefulDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="carefulDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="carefulDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="carefulDoctor"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <p>- чи надав лікар вичерпний коментар при оцінці Вашого стану?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="ordersDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="ordersDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="ordersDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="ordersDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="ordersDoctor"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <p>- чи надав лікар вичерпний коментар до своїх призначень?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <p>- чи був лікар ввічливим?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="respectfulDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="respectfulDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="respectfulDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="respectfulDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="respectfulDoctor"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <h2>Оцініть порядок прийому та умови клініки:</h2>
      <section>
        <p>- чи був Ваш прийом добре організованим?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="clinicOrganisation"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="clinicOrganisation"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="clinicOrganisation"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="clinicOrganisation"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="clinicOrganisation"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <p>- чи було Ваше перебування в клініці зручним?</p>
        <label>
          <ImAngry />
          <input
            type="radio"
            name="clinicStay"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSad />
          <input
            type="radio"
            name="clinicStay"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImNeutral />
          <input
            type="radio"
            name="clinicStay"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImSmile />
          <input
            type="radio"
            name="clinicStay"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label>
          <ImHappy />
          <input
            type="radio"
            name="clinicStay"
            value="5 of 5"
            // checked={setRegistration === 5}
            onChange={handleContactData}
          />
        </label>
      </section>

      <section>
        <h2>Маєте ще щось сказати? Лишіть Ваш коментар:</h2>
        <textarea
          className={s.comment}
          value={remark}
          type="text"
          name="remark"
          rows="10"
          cols="55"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Коментар может состоять только из букв, апострофа, тире и пробелов."
          placeholder="Будь ласка, лишіть Ваш коментар"
          onChange={handleContactData}
        ></textarea>
      </section>
      <button type="submit">Add contact</button>
    </form>
  );
}
