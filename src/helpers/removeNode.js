function removeDomNode(tabs = []) {
  const nodeToRemove = document.querySelector(".main-content");
  if (nodeToRemove) nodeToRemove.remove();

  //remove inactive header nav border bottom
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });
}

export default removeDomNode;
