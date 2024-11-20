import { openModal, closeModal } from "./modules/menuModalController.js";
import { updateMenuLinks } from "./modules/updateMenuLinks.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openModal", func: openModal },
    { name: "closeModal", func: closeModal },
    { name: "updateMenuLinks", func: updateMenuLinks },
  ];

  functionsToCall.forEach(({ name, func }) => {
    if (typeof func === "function") {
      try {
        func();
      } catch (error) {
        console.log(`Erro ao executar ${name}: `, error);
      }
    } else {
      console.error(`${name} não é uma função válida.`);
    }
  });
});
