import { ZIPCODES } from "../data.js";

export const createZipSuggestions = () => {
  const input = document.getElementById("zipcode-input");
  const suggestionsContainer = document.getElementById("suggestions-container");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestionsContainer.innerHTML = "";
    suggestionsContainer.classList.add("hidden");

    if (query) {
      const filteredData = ZIPCODES.filter((item) =>
        item.toLowerCase().includes(query)
      );
      filteredData.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = item;
        div.addEventListener("click", () => {
          input.value = item;
          suggestionsContainer.innerHTML = "";
        });
        suggestionsContainer.appendChild(div);
      });
      if (suggestionsContainer.children.length > 0) {
        suggestionsContainer.classList.remove("hidden");
      } else {
        suggestionsContainer.classList.add("hidden");
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#autocomplete-input") &&
      !e.target.closest("#suggestions-container")
    ) {
      suggestionsContainer.innerHTML = "";
      suggestionsContainer.classList.add("hidden");
    }
  });
};
