import { LAWYERS, REVIEWCATEGORIES } from "../data.js";

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

  modalContent.append(modalButton, modalTitle, modalBody);
  modalContainer.appendChild(modalContent);
  mainContainer.appendChild(modalContainer);

  const readElements = document.getElementsByClassName("read");

  const createTopContent = (
    image,
    name,
    location,
    practice,
    usersCount,
    stars
  ) => {
    const reviewTopContainer = document.createElement("div");
    const reviewProfileContainer = document.createElement("div");
    const reviewProfileDetailsContainer = document.createElement("div");
    const totalRatingContainer = document.createElement("div");
    const starsContainer = document.createElement("div");

    const profileImage = document.createElement("img");
    const profileName = document.createElement("span");
    const profileLocation = document.createElement("span");
    const profilePractice = document.createElement("span");
    const profileRating = document.createElement("span");

    reviewTopContainer.classList.add("review-top");
    reviewProfileContainer.classList.add("review-profile");
    reviewProfileDetailsContainer.classList.add("review-profile-details");
    totalRatingContainer.classList.add("review-total-rating");
    starsContainer.classList.add("stars");
    profileImage.classList.add("lawyer-image");
    profileName.classList.add("review-name");
    profileLocation.classList.add("review-location");
    profilePractice.classList.add("review-practice");

    const createStars = (num) => {
      for (let i = 0; i < num; i++) {
        const starItem = document.createElement("span");
        const starImage = document.createElement("img");
        starImage.src = "/assets/star.png";
        starImage.alt = "star icon";
        starItem.appendChild(starImage);
        starsContainer.appendChild(starItem);
      }
    };

    createStars(stars);
    profileRating.textContent = `Rating (${usersCount} users)`;
    profileImage.src = `/assets/${image}`;
    profileImage.alt = "lawyer image";
    profileName.textContent = name;
    profileLocation.textContent = location;
    profilePractice.textContent = practice;

    totalRatingContainer.append(profileRating, starsContainer);
    reviewProfileDetailsContainer.append(
      profileName,
      profileLocation,
      profilePractice
    );
    reviewProfileContainer.append(profileImage, reviewProfileDetailsContainer);
    reviewTopContainer.append(reviewProfileContainer, totalRatingContainer);
    modalBody.append(reviewTopContainer);
  };

  const createMiddleContent = () => {
    const reviewMiddleContainer = document.createElement("div");
    reviewMiddleContainer.classList.add("review-middle");
    REVIEWCATEGORIES.forEach((element, index) => {
      const isFirstElement = index === 0;
      const itemContainer = document.createElement("div");
      const name = document.createElement("span");
      name.textContent = element.name;
      if (isFirstElement) {
        name.classList.add("first-review-category");
      }
      itemContainer.classList.add("review-category-item");
      const starsContainer = document.createElement("div");
      starsContainer.classList.add("stars");

      for (let i = 0; i < 5; i++) {
        const starItem = document.createElement("span");
        const starImage = document.createElement("img");
        starImage.src = "/assets/star.png";
        starImage.alt = "star icon";
        starItem.appendChild(starImage);
        starsContainer.appendChild(starItem);
      }

      itemContainer.append(name, starsContainer);
      reviewMiddleContainer.appendChild(itemContainer);
    });
    modalBody.appendChild(reviewMiddleContainer);
  };

  const createBottomContent = () => {};

  const openModal = (index) => {
    const usersCount = 29;
    const stars = 5;
    const { image, name, location, practice } = LAWYERS[index];
    createTopContent(image, name, location, practice, usersCount, stars);
    createMiddleContent();
    modalBody.appendChild(closeButton);
    modalContainer.classList.remove("hidden");
  };

  const closeModal = () => {
    modalBody.innerHTML = "";
    modalContainer.classList.add("hidden");
  };

  [...readElements].forEach((element, index) => {
    element.addEventListener("click", () => {
      openModal(index);
    });
  });

  modalButton.addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);
};
