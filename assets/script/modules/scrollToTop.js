export const scrollToTop = () => {
  const btnScroll = document.querySelector("#btnGoToTop");

  if (!btnScroll) return;

  const moveToTop = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleButtonVisibility = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 20) {
      btnScroll.classList.add("visible");

      if (!btnScroll.hasListener) {
        ["touchstart", "click"].forEach((eventType) => {
          btnScroll.addEventListener(eventType, moveToTop);
        });

        btnScroll.hasListener = true;
      }
    } else {
      btnScroll.classList.remove("visible");

      if (btnScroll.hasListener) {
        ["touchstart", "click"].forEach((eventType) => {
          btnScroll.removeEventListener(eventType, moveToTop);
        });

        btnScroll.hasListener = false;
      }
    }
  };

  window.addEventListener("scroll", toggleButtonVisibility);
};
