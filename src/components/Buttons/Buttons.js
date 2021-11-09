import React, { Component } from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Filter from "../Filter/Filter";
import Modal from "../Modal/Modal";

import s from "./Buttons.module.css";

class Buttons extends Component {
  state = {
    showModal: false,
    showed: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <nav className={s.navigation}>
        <button className={s.button}>Напрямок</button>
        <button className={s.button}>Лiкуючий лiкар</button>
        <button className={s.button} type="button" onClick={this.toggleModal}>
          Залишити вiдгук
        </button>
        {showModal && (
          <Modal>
            <FeedbackForm />
            <div className={s.buttonClose}>
              <button
                className={s.button}
                type="button"
                onClick={this.toggleModal}
              >
                Закрити вiдгук
              </button>
            </div>
          </Modal>
        )}
        <button
          className={s.button}
          onClick={() => {
            this.setState({ showed: !this.state.showed });
          }}
        >
          Клiнiка
        </button>
        <div className={s.filter}>{this.state.showed ? <Filter /> : null}</div>
      </nav>
    );
  }
}

export default Buttons;
