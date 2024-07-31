import { createMainCategoryModal } from "./utils/createMainCategoryModal.js";
import { createMoreCategoriesModal } from "./utils/createMoreCategoriesModal.js";
import { createZipSuggestions } from "./utils/createZipSuggestions.js";
import { customizeDropdownOptions } from "./utils/customizeDropdownOptions.js";

document.addEventListener("DOMContentLoaded", () => {
  createZipSuggestions();
  createMainCategoryModal();
  createMoreCategoriesModal();
  customizeDropdownOptions();
});
