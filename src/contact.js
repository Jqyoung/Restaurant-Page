import phoneIcon from "./icons/phone.svg";
import timeIcon from "./icons/time.svg";
import addressIcon from "./icons/address.svg";
import mapImg from "./images/map.png";

function createContactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("main-content", "contact");

  const phoneImg = document.createElement("img");
  phoneImg.src = phoneIcon;
  const phone = document.createElement("p");
  phone.classList.add("phone");
  phone.textContent = "999-333-8888";

  const timeImg = document.createElement("img");
  timeImg.src = timeIcon;
  const hours = document.createElement("p");
  hours.classList.add("hours");
  hours.textContent = "Mon - Sun: 11am-9pm";

  const addressImg = document.createElement("img");
  addressImg.src = addressIcon;
  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = "9999 5400 S Blvd";

  const map = document.createElement("img");
  map.classList.add("map");
  map.src = mapImg;
  map.alt = "map";

  contactContainer.append(
    phoneImg,
    phone,
    timeImg,
    hours,
    addressImg,
    address,
    map
  );

  return contactContainer;
}
export { createContactPage };
