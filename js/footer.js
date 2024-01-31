const copyrightText = document.querySelector("footer .subfooter .copyright");
const currentYear = new Date().getFullYear();
const existingText = copyrightText.textContent;

copyrightText.textContent = `${existingText} ${currentYear}`;
