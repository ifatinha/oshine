export const openModalImage = () => {
  $(document).ready(function () {
    // Seleciona os itens da galeria
    const images = $(".gallery__item");

    // Contêiner da imagem no modal
    const imageContainer = $(".image__container");

    // Pega o total de imagens
    $("#NumberImages").text(`${images.length}`);

    // Índice da imagem atualmente exibida no modal
    let currentIndex = 0;

    //Atualiza o contador da imagem
    const updateImageCounter = (idx) => {
      $("#imageCounter").text(idx);
    };

    // Cria e adiciona a imagem no modal
    const createImage = (image) => {
      imageContainer.html(image);
    };

    // Remove a classe modal do container
    const closeModal = () => {
      $("#modalImage").removeClass("modal__active");
      imageContainer.empty();
    };

    // Evento para abrir o modal ao clicar em uma imagem
    images.on("click", function () {
      $("#modalImage").addClass("modal__active");
      currentIndex = parseInt($(this).attr("data-gallery"));
      const clonedImage = $(this).children().first().clone();
      createImage(clonedImage);
      updateImageCounter(currentIndex);
    });

    // Fechar o modal
    $("#closeModalImage").on("click", function (event) {
      event.preventDefault();
      closeModal();
    });

    // prev image
    $("#prevImage").on("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      const clonedImage = $(images[currentIndex]).children().first().clone();
      createImage(clonedImage);
      updateImageCounter(currentIndex + 1);
    });

    // next image
    $("#nextImage").on("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      const clonedImage = $(images[currentIndex]).children().first().clone();
      createImage(clonedImage);
      updateImageCounter(currentIndex + 1);
    });
  });
};
