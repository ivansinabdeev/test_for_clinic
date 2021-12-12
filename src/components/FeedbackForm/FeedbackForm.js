import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/comment/comment-actions";
import { getContacts } from "../../redux/comment/comment-selectors";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ImAngry, ImSad, ImNeutral, ImSmile, ImHappy } from "react-icons/im";

import s from "./FeedbackForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  // const [date, setDate] = useState(new Date());
  const [clinic, setClinic] = useState("");
  const [registration, setRegistration] = useState("");
  const [speedAdmin, setSpeedAdmin] = useState("");
  const [niceAdmin, setNiceAdmin] = useState("");
  const [nameDoctor, setNameDoctor] = useState("");
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

      case "startDate":
        setStartDate(value);
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

      case "nameDoctor":
        setNameDoctor(value);
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
        contacts.some(
          (contact) => contact.startDate === newContact.startDate
        ) ||
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
          (contact) => contact.nameDoctor === newContact.nameDoctor
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
      startDate,
      registration,
      speedAdmin,
      niceAdmin,
      nameDoctor,
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
    setStartDate("");
    setClinic("");
    setRegistration("");
    setSpeedAdmin("");
    setNiceAdmin("");
    setNameDoctor("");
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
    <form onSubmit={handleSubmit} className={s.form}>
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
          value={startDate}
          type="date"
          name="date"
          placeholder="Виберiть дату"
          // selected={date}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          // onChange={handleContactData}
          // onChange={(date) => setDate(date)}
          isClearable
          placeholderText="I have been cleared!"
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        />
      </section>

      <label className={s.clinic}>
        Виберіть адресу клініки
        <select
          className={s.clinicSelect}
          name="clinic"
          value={clinic}
          onChange={handleContactData}
        >
          <option value="" disabled>
            Виберіть адресу клініки
          </option>
          <option value="Ходосівка">Ходосівка</option>
          <option value="Капітанівка">Капітанівка</option>
        </select>
      </label>

      <section className={s.radioSection}>
        <p>
          Як швидко Вам вдалося зв’язатися з клінікою та/чи записатися на
          прийом?
        </p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="registration"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="registration"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="registration"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="registration"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <h2 className={s.title}>Оцініть роботу рецепції:</h2>
      <section className={s.radioSection}>
        <p>- швидкість та точність роботи адміністратора?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="speedAdmin"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="speedAdmin"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="speedAdmin"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="speedAdmin"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <section className={s.radioSection}>
        <p>- чи був адміністратор ввічливим?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="niceAdmin"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="niceAdmin"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="niceAdmin"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="niceAdmin"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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
      <h2 className={s.title}>Оцініть роботу лікаря:</h2>
      <label>
        Зазначте ПІБ лікаря
        <input
          value={name}
          type="text"
          name="nameDoctor"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
          placeholder="ПІБ лікаря"
          onChange={handleContactData}
        />
      </label>
      <section className={s.radioSection}>
        <p>- чи був лікар уважним до Ваших скарг?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="carefulDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="carefulDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="carefulDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="carefulDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <section className={s.radioSection}>
        <p>- чи надав лікар вичерпний коментар при оцінці Вашого стану?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="ordersDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="ordersDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="ordersDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="ordersDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <section className={s.radioSection}>
        <p>- чи надав лікар вичерпний коментар до своїх призначень?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="prescriptionDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <section className={s.radioSection}>
        <p>- чи був лікар ввічливим?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="respectfulDoctor"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="respectfulDoctor"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="respectfulDoctor"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="respectfulDoctor"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <h2 className={s.title}>Оцініть порядок прийому та умови клініки:</h2>
      <section className={s.radioSection}>
        <p>- чи був Ваш прийом добре організованим?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="clinicOrganisation"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="clinicOrganisation"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="clinicOrganisation"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="clinicOrganisation"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <section className={s.radioSection}>
        <p>- чи було Ваше перебування в клініці зручним?</p>
        <label className={s.radioGroup}>
          <ImAngry />
          <input
            type="radio"
            name="clinicStay"
            value="1 of 5"
            // checked={setRegistration === 1}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSad />
          <input
            type="radio"
            name="clinicStay"
            value="2 of 5"
            // checked={setRegistration === 2}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImNeutral />
          <input
            type="radio"
            name="clinicStay"
            value="3 of 5"
            // checked={setRegistration === 3}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
          <ImSmile />
          <input
            type="radio"
            name="clinicStay"
            value="4 of 5"
            // checked={setRegistration === 4}
            onChange={handleContactData}
          />
        </label>
        <label className={s.radioGroup}>
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

      <section className={s.radioSection}>
        <h2 className={s.title}>Маєте ще щось сказати? Лишіть Ваш коментар:</h2>
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
      <button className={s.button} type="submit">
        Додати вiдгук
      </button>
    </form>
  );
}
