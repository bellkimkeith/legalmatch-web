import { CATEGORYOPTIONS } from "../data.js";
import {
  createIssues,
  createMainCategoryModalTitle,
} from "./generateModalContent.js";

export const customizeDropdownOptions = () => {
  const customSelect = document.getElementById("custom-select");
  const optionsContainer = document.getElementById("options-container");
  const selectedOption = document.getElementById("selected-option");
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const issuesContainer = document.getElementById("modal-issues");

  const populateOptions = () => {
    CATEGORYOPTIONS.forEach((option) => {
      const div = document.createElement("div");
      div.classList.add("option-item");
      div.dataset.value = option.value;
      div.textContent = option.text;
      optionsContainer.appendChild(div);
    });
  };

  const toggleOptions = () => {
    optionsContainer.classList.toggle("hidden");
  };

  const selectOption = (event) => {
    const option = event.target;
    if (option.classList.contains("option-item")) {
      issuesContainer.innerHTML = "";
      selectedOption.textContent = option.textContent;
      optionsContainer.classList.add("hidden");

      modalTitle.innerHTML += createMainCategoryModalTitle(
        option.dataset.value
      );
      createIssues();
      modal.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    const title = document.getElementById("full-modal-title");
    title.parentNode.removeChild(title);
  };

  customSelect.addEventListener("click", toggleOptions);
  optionsContainer.addEventListener("click", selectOption);
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".custom-select-container")) {
      optionsContainer.classList.add("hidden");
    }
  });

  populateOptions();
};
