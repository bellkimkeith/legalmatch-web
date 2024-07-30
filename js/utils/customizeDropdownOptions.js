export const customizeDropdownOptions = () => {
  const customSelect = document.getElementById("custom-select");
  const optionsContainer = document.getElementById("options-container");
  const selectedOption = document.getElementById("selected-option");

  const options = [
    { value: "Family", text: "Family" },
    { value: "Criminal Defense", text: "Criminal Defense" },
    { value: "Business", text: "Business" },
    { value: "Personal Injury", text: "Personal Injury" },
    { value: "Bankruptcy & Finances", text: "Bankruptcy & Finances" },
    { value: "Products & Services", text: "Products & Services" },
    { value: "Employment", text: "Employment" },
    { value: "Real Estate", text: "Real Estate" },
    { value: "Immigration", text: "Immigration" },
    { value: "Wills, Trusts & Estates", text: "Wills, Trusts & Estates" },
    { value: "Government", text: "Government" },
    { value: "Intellectual Property", text: "Intellectual Property" },
  ];

  function populateOptions() {
    options.forEach((option) => {
      const div = document.createElement("div");
      div.classList.add("option-item");
      div.dataset.value = option.value;
      div.textContent = option.text;
      optionsContainer.appendChild(div);
    });
  }

  function toggleOptions() {
    optionsContainer.classList.toggle("hidden");
  }

  function selectOption(event) {
    const option = event.target;
    if (option.classList.contains("option-item")) {
      selectedOption.textContent = option.textContent;
      optionsContainer.classList.add("hidden");
    }
  }

  customSelect.addEventListener("click", toggleOptions);
  optionsContainer.addEventListener("click", selectOption);
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".custom-select-container")) {
      optionsContainer.classList.add("hidden");
    }
  });

  populateOptions();
};
