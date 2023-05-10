import beefNoodleImg from "./images/beefNoodleSoup.jpg";
import slicedNoodleImg from "./images/slicedNoodle.png";
import riceNoodleImg from "./images/riceNoodle.jpg";
import zhaJiangNoodleImg from "./images/lowMein.jpg";

import tsukemen from "./images/tsukimen.jpg";
import ramen from "./images/ramen.jpg";

import iceDrink from "./images/iceDrink.jpg";
import sake from "./images/sake.jpg";

function createMenuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("main-content", "menu");

  const categories = ["Noodle Soup", "Ramen", "Beverage"];
  for (let i = 0; i < 3; i++) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");
    const categoryElement = document.createElement("h2");
    categoryElement.textContent = categories[i];
    menuContainer.append(categoryDiv);
    categoryDiv.append(categoryElement);
  }

  const noodlesMenu = [
    menuItemsFactory(
      "Beef Noodle Soup",
      "$15.99",
      "Rich beef and pork bone soup with tender beef short ribs and green cabbage as toppings",
      beefNoodleImg,
      "Beef Noodle Soup"
    ),
    menuItemsFactory(
      "Hand-Sliced Noodle Soup",
      "$15.99",
      "Hand-sliced noodles, tender beef slices, and fresh lettuce in a flavorful bone broth with aromatic spices",
      slicedNoodleImg,
      "Sliced Noodle Soup"
    ),

    menuItemsFactory(
      "Rice Noodle Soup",
      "$14.99",
      "Delicious chicken and pork broth with pork tender, deep-fried chashu and lettuce as toppings ",
      riceNoodleImg,
      "Rice Noodle Soup"
    ),

    menuItemsFactory(
      "Zha Jiang Noodle",
      "$13.99",
      "Wheat noodles with savory fermented soybean paste sauce, ground meat, garlic, ginger, and topped with vegetables",
      zhaJiangNoodleImg,
      "Zha Jiang Noodle"
    ),
  ];
  const ramenMenu = [
    menuItemsFactory(
      "Tsukemen Dipping Ramen",
      "17.99",
      "Thick wheat noodles dipped in a rich creamy broth made from pork bone and dashi, topped with chashu pork and bamboo shoots.",
      tsukemen,
      "Tsukemen Dipping Ramen Noodle"
    ),

    menuItemsFactory(
      "Tonkotsu Ramen",
      "$17.99",
      "Rich pork bone soup with tender chashu, soft-boiled egg, corn and celtuce as topping",
      ramen,
      "Tonkotsu Ramen"
    ),
  ];

  const beverageMenu = [
    menuItemsFactory(
      "Ice Jelly Drink",
      "$3.99",
      "Icy drink made with brown sugar and papaya starch",
      iceDrink,
      "Ice Jelly Drink"
    ),

    menuItemsFactory(
      "Sake",
      "3.99",
      "Japanese rice wine with a smooth, slightly sweet taste served chilled or warm",
      sake,
      "Sake"
    ),
  ];

  const noodleMenuDivs = createMenuItems(noodlesMenu);
  for (let i = 0; i < noodleMenuDivs.length; i++)
    menuContainer.children[0].append(noodleMenuDivs[i]);

  const ramenMenuDivs = createMenuItems(ramenMenu);
  for (let i = 0; i < ramenMenuDivs.length; i++)
    menuContainer.children[1].append(ramenMenuDivs[i]);

  const beverageDivs = createMenuItems(beverageMenu);
  for (let i = 0; i < beverageDivs.length; i++)
    menuContainer.children[2].append(beverageDivs[i]);

  return menuContainer;
}

function menuItemsFactory(name, price, description, imgPath, imgAlt) {
  return { name, description, price, imgPath, imgAlt };
}

function createMenuItems(menuItem) {
  const menuDivs = [];
  for (let i = 0; i < menuItem.length; i++) {
    const noodleSoupDiv = document.createElement("div");
    const menuItemName = document.createElement("h3");
    menuItemName.textContent = menuItem[i].name;

    const menuItemPrice = document.createElement("p");
    menuItemPrice.classList.add("price");
    menuItemPrice.textContent = menuItem[i].price;

    const menuItemDes = document.createElement("p");
    menuItemDes.classList.add("description");
    menuItemDes.textContent = menuItem[i].description;

    const menuImage = document.createElement("img");
    menuImage.src = menuItem[i].imgPath;
    menuImage.alt = menuItem[i].imgAlt;

    noodleSoupDiv.append(menuImage, menuItemName, menuItemPrice, menuItemDes);

    menuDivs.push(noodleSoupDiv);
  }
  return menuDivs;
}

export { createMenuPage };
