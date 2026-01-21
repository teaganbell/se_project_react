import "./ConfirmDeleteModal.css";
import closeIcon from "../../images/confirm-delete-close.png";

function ConfirmDeleteModal({ isOpen, onConfirm, onCancel }) {
  return (
    <div className={isOpen ? "modal modal_opened" : "modal"}>
      <div className="confirm-modal__content">
        <button
          onClick={onCancel}
          type="button"
          className="confirm-modal__close"
        >
          <img
            src={closeIcon}
            alt="Close"
            className="confirm-modal__close-icon"
          />
        </button>
        <h2 className="confirm-modal__title">
          Are you sure you want to delete this item?
        </h2>
        <p className="confirm-modal__subtitle">This action is irreversible.</p>
        <div className="confirm-modal__buttons">
          <button
            onClick={onConfirm}
            type="button"
            className="confirm-modal__btn confirm-modal__btn_type_delete"
          >
            Yes, delete item
          </button>
          <button
            onClick={onCancel}
            type="button"
            className="confirm-modal__btn confirm-modal__btn_type_cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
