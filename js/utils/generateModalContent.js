import { ISSUES, OTHERCATEGORIES } from "../data.js";

export const createMainCategoryModalTitle = (title) => {
  return `
    <p id="full-modal-title">Which <span id="custom-title">${title}</span> issue(s) apply to your case?</p>
    `;
};

export const createIssues = () => {
  const issuesContainer = document.getElementById("modal-issues");
  ISSUES.forEach((issue) => {
    const div = document.createElement("div");
    div.classList.add("checkbox-item");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = issue.replace(/\s+/g, "-").toLowerCase();

    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = issue;

    div.appendChild(input);
    div.appendChild(label);

    issuesContainer.appendChild(div);
  });
};

export const createMoreCategoriesList = () => {
  const content = document.getElementById("more-category-modal-body");
  OTHERCATEGORIES.forEach((category) => {
    const categoryItem = document.createElement("span");
    categoryItem.textContent = category;
    content.appendChild(categoryItem);
  });
};
