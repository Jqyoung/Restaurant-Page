import helpSetAttr from "./helpers/helpSetAttr.js";
import icon from "./images/github.png";

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const anchor = document.createElement("a");
  helpSetAttr(anchor, { href: "https://github.com/Jqyoung", target: "_blank" });
  const linkPara = document.createElement("p");
  linkPara.innerHTML = "Copyright &copy; 2023 Joey Young";
  anchor.appendChild(linkPara);

  const anchor2 = document.createElement("a");
  helpSetAttr(anchor2, {
    href: "https://jqyoung.github.io/Restaurant-Page/",
    target: "_blank",
  });
  const githubIcon = document.createElement("img");
  helpSetAttr(githubIcon, { src: icon, alt: "github" });
  anchor2.appendChild(githubIcon);

  footer.append(anchor, anchor2);

  return footer;
}

export default createFooter;
