import {
  updateAriaAttributes,
  updateAriaHidden,
} from "../util/ariaAttributesUtils.js";

const getElementsDOM = () => {
  const elements = {
    modal: document.querySelector("#menuModal"),
    btnOpenModal: document.querySelector("#navbarOpenButton"),
    sidebar: document.querySelector("#sidebar"),
    btnCloseSidebar: document.querySelector("#btnCloseSidebar"),
  };

  if (
    !elements.modal ||
    !elements.btnOpenModal ||
    !elements.sidebar ||
    !elements.btnCloseSidebar
  )
    return;

  return elements;
};

const handleToggle = (event) => {
  if (event?.type === "touchstart") return;

  const { modal, btnOpenModal, sidebar } = getElementsDOM();
  const classes = ["burger__active", "modal__active", "sidebar__active"];

  [btnOpenModal, modal, sidebar].forEach((element, idx) => {
    element.classList.toggle(classes[idx]);
  });

  const isOpen = btnOpenModal.classList.contains("burger__active");
  updateAriaAttributes(isOpen, btnOpenModal);

  const isOpenSidebar = sidebar.classList.contains("sidebar__active");
  updateAriaHidden(isOpenSidebar, sidebar);
};

export const initializeModalMenu = () => {
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

export const closeSidebar = () => {
  const { btnCloseSidebar } = getElementsDOM();

  console.log(btnCloseSidebar);
  [("touchstart", "click")].forEach((eventType) => {
    btnCloseSidebar.addEventListener(eventType, handleToggle);
  });
};
