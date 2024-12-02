export const openModalImage = () => {
  $(document).ready(function () {
    $("#imageCounter").text("Quantidade de imagens");

    //Abrir modal clicando no item das imagens;
    $(".about__gallery-item").on("click", function (idx) {
      $("#modalImage").addClass("modal__active");
    });

    $("#closeModalImage").on("click", function (event) {
      event.preventDefault();
      $("#modalImage").removeClass("modal__active");
    });
  });
};
