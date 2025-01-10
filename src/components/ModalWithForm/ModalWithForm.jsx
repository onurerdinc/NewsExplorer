import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  submitButtonText,
}) {
  if (!isOpen) return null; // Render nothing if the modal is not open

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button
          className="modal__close-button"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit-button">
            {submitButtonText || "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
