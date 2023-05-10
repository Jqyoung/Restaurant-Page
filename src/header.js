import logo from "./images/odin-lined.png";
import helpSetAttr from "./helpers/helpSetAttr.js";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logoElement = document.createElement("img");
  helpSetAttr(logoElement, { src: logo, alt: logo });
  header.appendChild(logoElement);

  const buttonContent = ["Home", "Menu", "Contact"];
  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    if (i === 0) {
      button.classList.add("home-tab", "active");
    }
    if (i === 1) {
      button.classList.add("menu-tab");
    }
    button.textContent = buttonContent[i];
    header.appendChild(button);
  }
  return header;
}

export default createHeader;
