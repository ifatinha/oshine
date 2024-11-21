import { updateAriaAttributes } from "../util/ariaAttributesUtils.js";

const getElementsDOM = () => {
  const elements = {
    modal: document.querySelector("#menuModal"),
    btnOpenModal: document.querySelector("#navbarOpenButton"),
  };

  if (!elements.modal || !elements.btnOpenModal) return;

  return elements;
};

const handleToggle = (event) => {
  if (event?.type === "touchstart") return;

  const { modal, btnOpenModal } = getElementsDOM();
  const classes = ["burger__active", "modal__active"];

  [btnOpenModal, modal].forEach((element, idx) => {
    element.classList.toggle(classes[idx]);
  });

  const isOpen = btnOpenModal.classList.contains("burger__active");
  updateAriaAttributes(isOpen, btnOpenModal);
};

export const openModal = () => {
  const { btnOpenModal } = getElementsDOM();

  ["touchstart", "click"].forEach((eventType) => {
    btnOpenModal.addEventListener(eventType, handleToggle);
  });
};

export const initializeCloseModal = () => {
  const { modal } = getElementsDOM();

  ["click", "touchstart"].forEach((eventType) => {
    modal.addEventListener(eventType, handleToggle);
  });
};

export const closeModal = () => {
  const buttonModal = document.querySelector("#menuModalCloseButton");
  const modal = document.querySelector("#menuModal");

  if (!buttonModal || !modal) return;

  const closeMenu = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    menuModal.classList.remove("modal__active");
  };

  ["touchstart", "click"].forEach((eventType) => {
    buttonModal.addEventListener(eventType, closeMenu);
  });
};
