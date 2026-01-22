import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const defaultValues = {
  name: "",
  imageUrl: "",
  weatherType: "",
};

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const { values, setValues, handleChange } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  const isFormValid =
    values.name.trim() && values.imageUrl.trim() && values.weatherType;

  function handleSubmit(evt) {
    evt.preventDefault();
    const newItem = {
      ...values,
      weather: values.weatherType,
    };
    onAddItem(newItem);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input modal__input_type_card-name"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          id="clothing-imageUrl"
          className="modal__input modal__input_type_url"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
        <span className="modal__error" id="place-link-error" />
      </label>
      <fieldset className="modal__fieldset modal__fieldset_type_radio">
        <legend className="modal__legend">Select the weather type:</legend>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceHot"
            name="weatherType"
            value="hot"
            onChange={handleChange}
          />
          <label className="modal__label_type_radio" htmlFor="choiceHot">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceWarm"
            name="weatherType"
            value="warm"
            onChange={handleChange}
          />
          <label className="modal__label_type_radio" htmlFor="choiceWarm">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceCold"
            name="weatherType"
            value="cold"
            onChange={handleChange}
          />
          <label className="modal__label_type_radio" htmlFor="choiceCold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
