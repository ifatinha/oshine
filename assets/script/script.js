import {
  initializeModalMenu,
  initializeCloseModal,
  closeSidebar,
} from "./modules/menuModalController.js";
import { updateMenuLinks } from "./modules/updateMenuLinks.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "updateMenuLinks", func: updateMenuLinks },
    { name: "initializeModalMenu", func: initializeModalMenu },
    { name: "initializeCloseModal", func: initializeCloseModal },
    { name: "closeSidebar", func: closeSidebar },
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
