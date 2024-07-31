import { createMoreCategoriesList } from "./generateModalContent.js";

export const createMoreCategoriesModal = () => {
  const mainContainer = document.getElementById("container");
  const clickHere = document.getElementById("click-here");
  const modalContainer = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalButton = document.createElement("span");
  const modalTitle = document.createElement("h3");
  const modalSubtitle = document.createElement("h5");
  const modalBody = document.createElement("div");

  modalContainer.id = "more-category-modal";
  modalButton.id = "more-category-modal-close";
  modalTitle.id = "more-category-modal-title";
  modalSubtitle.id = "more-category-modal-subtitle";
  modalBody.id = "more-category-modal-body";
  modalContainer.classList.add("modal", "hidden");
  modalContent.classList.add("modal-content");

  modalButton.innerHTML = "&times;";
  modalTitle.textContent = "OTHER CATEGORIES";
  modalSubtitle.textContent = "Choose the category that best fits your case";

  modalContent.append(modalButton, modalTitle, modalSubtitle, modalBody);
  modalContainer.appendChild(modalContent);
  mainContainer.appendChild(modalContainer);
  createMoreCategoriesList();

  const openModal = () => {
    modalContainer.classList.remove("hidden");
  };

  const closeModal = () => {
    modalContainer.classList.add("hidden");
  };

  clickHere.addEventListener("click", openModal);
  modalButton.addEventListener("click", closeModal);
};
