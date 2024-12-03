export const openModalImage = () => {
  $(document).ready(function () {
    const images = $(".about__gallery-item");
    $("#NumberImages").text(`0${images.length}`);

    const createImage = (image) => {
      const imageContainer = $(".image__container");
      imageContainer.prepend(image);
    };

    const removeImage = () => {
      const image = $(".image__container img");
      image.remove();
    };

    //Abrir modal clicando no item das imagens;
    $(images).on("click", function () {
      $("#modalImage").addClass("modal__active");
      $("#imageCounter").text($(this).attr("data-gallery"));
      const imageClone = $(this).clone().children()[0];
      createImage(imageClone);
    });

    // Fechar o modal
    $("#closeModalImage").on("click", function (event) {
      event.preventDefault();
      $("#modalImage").removeClass("modal__active");
      removeImage();
    });
  });
};
