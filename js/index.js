import { createZipSuggestions } from "./utils/createZipSuggestions.js";
import { customizeDropdownOptions } from "./utils/customizeDropdownOptions.js";

document.addEventListener("DOMContentLoaded", () => {
  createZipSuggestions();
  customizeDropdownOptions();
});
