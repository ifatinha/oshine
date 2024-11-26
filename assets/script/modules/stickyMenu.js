$(document).ready(function () {
  const header = $("#header");
  const headerOffset = header.offset().top;

  $(window).on("scroll", function () {
    const scrollCurrent = $(window).scrollTop();

    if (headerOffset <= scrollCurrent && !header.hasClass("header-stick")) {
      header.addClass("header-stick");
    } else if (scrollCurrent < 800 && header.hasClass("header-stick")) {
      header.removeClass("header-stick");
    }
  });
});
