import createHeader from "./header.js";
import { createHome } from "./home.js";
import createFooter from "./footer.js";

function initiatePage() {
  const container = document.getElementById("content");

  const header = createHeader();
  const mainContent = createHome();
  const footer = createFooter();

  container.append(header, mainContent, footer);
}

export { initiatePage };
