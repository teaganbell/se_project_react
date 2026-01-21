import { useState } from "react";
import "./ItemModal.css";
import closeIcon from "../../images/item-card-close-icon.svg";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteItem(card._id);
    setIsDeleteConfirmOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteConfirmOpen(false);
  };
  return (
    <>
      <div
        className={
          activeModal === "preview" && !isDeleteConfirmOpen
            ? "modal modal_opened"
            : "modal"
        }
      >
        <div className="modal__content modal__content_type_image">
          <button onClick={onClose} type="button" className="modal__close">
            <img src={closeIcon} alt="Close" className="modal__close-icon" />
          </button>
          <img src={card.imageUrl} alt={card.name} className="modal__image" />
          <div className="modal__footer">
            <div className="modal__header-container">
              <h2 className="modal__caption">{card.name}</h2>
              <button
                onClick={handleDeleteClick}
                type="button"
                className="modal__delete-btn"
              >
                Delete item
              </button>
            </div>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
        </div>
      </div>
      <ConfirmDeleteModal
        isOpen={isDeleteConfirmOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}

export default ItemModal;
