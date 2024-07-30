import { createModal } from "./utils/createModal.js";
import { createZipSuggestions } from "./utils/createZipSuggestions.js";
import { customizeDropdownOptions } from "./utils/customizeDropdownOptions.js";

document.addEventListener("DOMContentLoaded", () => {
  createZipSuggestions();
  createModal();
  customizeDropdownOptions();
});
