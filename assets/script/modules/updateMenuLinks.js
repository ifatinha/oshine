export const updateMenuLinks = () => {
  const links = document.querySelectorAll("nav .header-menu_desktop a");
  const { pathname } = window.location;

  if (!links || links.length === 0) return;

  links.forEach((link) => {
    link.classList.remove("ativo");

    if (link.pathname === pathname) {
      link.classList.add("ativo");
    }
  });
};
