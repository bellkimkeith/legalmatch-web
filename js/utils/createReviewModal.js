export const createReviewModal = () => {
  const mainContainer = document.getElementById("container");
  const modalContainer = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalButton = document.createElement("span");
  const closeButton = document.createElement("div");
  const modalTitle = document.createElement("h2");
  const modalBody = document.createElement("div");

  modalContainer.id = "review-modal";
  modalButton.id = "review-modal-close";
  modalTitle.id = "review-modal-title";
  modalBody.id = "review-modal-body";
  closeButton.id = "review-modal-close-button";
  modalContainer.classList.add("modal", "hidden");
  modalContent.classList.add("modal-content");

  modalButton.innerHTML = "&times;";
  closeButton.textContent = "CLOSE";
  modalTitle.textContent = "CLIENT REVIEWS";

  modalBody.appendChild(closeButton);
  modalContent.append(modalButton, modalTitle, modalBody);
  modalContainer.appendChild(modalContent);
  mainContainer.appendChild(modalContainer);

  const readElements = document.getElementsByClassName("read");

  const openModal = () => {
    modalContainer.classList.remove("hidden");
    console.log("open please");
  };

  const closeModal = () => {
    modalContainer.classList.add("hidden");
  };

  [...readElements].forEach((element) => {
    element.addEventListener("click", openModal);
  });

  modalButton.addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);
};
