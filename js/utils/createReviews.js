import { LAWYERS } from "../data.js";

export const createReviews = () => {
  const reviewsContainer = document.getElementById("reviews-container");

  const generateReview = (image, name, location, practice, appendHr) => {
    const reviewContainer = document.createElement("div");
    const profileContainer = document.createElement("div");
    const profileDetailsContainer = document.createElement("div");
    const reviewDetailsContainer = document.createElement("div");
    const practiceContainer = document.createElement("div");
    const starsContainer = document.createElement("div");

    const lawyerImage = document.createElement("img");
    const lawyerName = document.createElement("span");
    const lawyerLocation = document.createElement("span");
    const lawyerPractice = document.createElement("span");
    const reviewText = document.createElement("p");
    const readMore = `<span class="read">Read Review <img src="/assets/book.png" alt="book icon"></span>`;

    reviewContainer.classList.add("review");
    profileContainer.classList.add("profile");
    reviewDetailsContainer.classList.add("review-details");
    profileDetailsContainer.classList.add("profile-details");
    practiceContainer.classList.add("practice-container");
    starsContainer.classList.add("stars");
    lawyerName.classList.add("name");
    lawyerLocation.classList.add("location");

    lawyerImage.src = `/assets/${image}`;
    lawyerImage.alt = "lawyer image";
    lawyerName.textContent = name;
    lawyerLocation.textContent = location;
    lawyerPractice.textContent = practice;
    reviewText.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum pariatur molestiae ut est error illum, perspiciatis architecto quidem recusandae beatae deleniti eveniet suscipit iste sit assumenda vitae? Enim, dolorem sequi.";

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

    createStars(5);

    practiceContainer.append(lawyerPractice, starsContainer);
    reviewDetailsContainer.append(practiceContainer, reviewText);
    reviewDetailsContainer.innerHTML += readMore;
    profileDetailsContainer.append(lawyerName, lawyerLocation);
    profileContainer.append(lawyerImage, profileDetailsContainer);
    reviewContainer.append(profileContainer, reviewDetailsContainer);
    if (appendHr) {
      const hr = document.createElement("hr");
      reviewsContainer.appendChild(reviewContainer);
      reviewsContainer.appendChild(hr);
    } else {
      reviewsContainer.appendChild(reviewContainer);
    }
  };

  LAWYERS.forEach((lawyer, index) => {
    let { image, name, location, practice } = lawyer;
    let appendHr = index < LAWYERS.length - 1;
    generateReview(image, name, location, practice, appendHr);
  });
};
