import React, { Component } from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Modal from "../Modal/Modal";

// import s from "./Buttons.module.css";

class Buttons extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <nav>
        <button>Напрямок</button>
        <button>Лiкуючий лiкар</button>
        <button type="button" onClick={this.toggleModal}>
          Залишити вiдгук
        </button>
        {showModal && (
          <Modal>
            <FeedbackForm />
            <button type="button" onClick={this.toggleModal}>
              Закрити вiдгук
            </button>
          </Modal>
        )}
        <button>Клiнiка</button>
      </nav>
    );
  }
}

export default Buttons;
