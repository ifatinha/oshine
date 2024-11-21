export const updateMenuLinks = () => {
  const links = document.querySelectorAll(".navbar-list a");
  const { pathname } = window.location;

  if (!links || links.length === 0) return;

  links[0].classList.add("activated");

  links.forEach((link) => {
    link.classList.remove("activated");

    if (link.pathname === pathname) {
      link.classList.add("activated");
    }
  });
};
