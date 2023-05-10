import { initiatePage } from "./initiatePage.js";
import { createHome } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";
import removeDomNode from "./helpers/removeNode.js";
import "./style.css";

initiatePage();
clickTab();

function clickTab() {
  const container = document.querySelector("#content");
  const footer = document.querySelector(".footer");
  const callbacks = [createHome, createMenuPage, createContactPage];
  const tabs = document.querySelectorAll(".header button");
  for (const [index, button] of tabs.entries()) {
    button.addEventListener("click", (e) => {
      removeDomNode(tabs);
      e.target.classList.add("active");
      container.insertBefore(callbacks[index](), footer);
    });
  }
}
