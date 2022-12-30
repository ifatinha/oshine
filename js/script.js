const links = document.querySelectorAll("nav .header-menu_desktop a");

function ativarLink(link) {
    const url = location.href;
    const linkHref = link.href;

    if (url.includes(linkHref)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);