export const createZipSuggestions = () => {
  const input = document.getElementById("zipcode-input");
  const suggestionsContainer = document.getElementById("suggestions-container");

  const data = ["Nowheresville, XX 00000", "Cherry Hill, NJ 08002"];

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestionsContainer.innerHTML = "";

    if (query) {
      const filteredData = data.filter((item) =>
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
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#autocomplete-input") &&
      !e.target.closest("#suggestions-container")
    ) {
      suggestionsContainer.innerHTML = "";
    }
  });
};
