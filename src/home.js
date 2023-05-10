import removeDomNode from "./helpers/removeNode";
import { createMenuPage } from "./menu.js";

function createHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("main-content", "home");

  const title = document.createElement("h1");
  title.textContent = "Way of Noodles";

  const description = document.createElement("p");
  description.textContent = "The best noodle bowls from China and Japan";

  const order = document.createElement("button");
  order.classList.add("order");
  order.textContent = "Order Now";

  order.addEventListener("click", () => {
    const content = document.querySelector("#content");
    const menuTab = document.querySelector(".menu-tab");
    const homeTab = document.querySelector(".home-tab");
    const footer = document.querySelector(".footer");
    removeDomNode();
    homeTab.classList.remove("active");
    menuTab.classList.add("active");
    content.insertBefore(createMenuPage(), footer);
  });

  homeContainer.append(title, description, order);

  return homeContainer;
}

export { createHome };
