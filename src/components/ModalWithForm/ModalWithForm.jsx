import "./ModalWithForm.css";
import closeIcon from "../../images/confirm-delete-close.png";

const ModalWithForm = ({
  title,
  name,
  buttonText = "Save",
  onClose,
  children,
  isOpen,
  onSubmit,
  isDisabled = false,
}) => (
  <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
    <div className="modal__content">
      <button type="button" className="modal__close" onClick={onClose}>
        <img src={closeIcon} alt="Close" className="modal__close-icon" />
      </button>
      <h3 className="modal__title">{title}</h3>
      <form className="modal__form" name={name} onSubmit={onSubmit}>
        {children}
        <button
          type="submit"
          className="button modal__button"
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </form>
    </div>
  </div>
);

export default ModalWithForm;
