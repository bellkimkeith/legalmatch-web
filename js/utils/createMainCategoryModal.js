export const createMainCategoryModal = () => {
  const mainContainer = document.getElementById("container");
  const modalContainer = document.createElement("div");
  const issuesContainer = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalButton = document.createElement("span");
  const findButton = document.createElement("div");
  const modalTitle = document.createElement("div");
  const modalBody = document.createElement("div");
  const modalNumber = document.createElement("span");

  modalContainer.id = "modal";
  modalButton.id = "modal-close";
  modalTitle.id = "modal-title";
  modalBody.id = "modal-body";
  modalNumber.id = "modal-number";
  issuesContainer.id = "modal-issues";
  findButton.id = "modal-find-button";
  modalContainer.classList.add("modal", "hidden");
  modalContent.classList.add("modal-content");
  modalNumber.classList.add("number");

  modalButton.innerHTML = "&times;";
  findButton.textContent = "FIND A LAWYER NOW";
  modalNumber.innerText = "3";

  modalTitle.append(modalNumber);
  modalBody.append(issuesContainer, findButton);
  modalContent.append(modalButton, modalTitle, modalBody);
  modalContainer.appendChild(modalContent);
  mainContainer.appendChild(modalContainer);
};
