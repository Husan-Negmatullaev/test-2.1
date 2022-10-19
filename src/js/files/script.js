import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = function () {
  const itemsBlogShowmore = document.querySelectorAll('.item-blog-showmore');

  itemsBlogShowmore.forEach(el => {
    const currentListItem = el.closest(".item-blog__list-item");
    const prevElem = el.previousElementSibling;
    const getCurrrentWidth = prevElem.clientWidth + el.clientWidth;

    if (getCurrrentWidth > currentListItem.clientWidth && window.innerWidth > 1100) {
      const button = document.createElement("button");
      const currentContentList = el.querySelectorAll(".item-blog-showmore__content li");

      [...currentContentList]
        .splice(3, currentContentList.length - 1)
        .forEach(el => el.setAttribute("hidden", true));

      button.className = "item-blog-showmore__more-btn";
      button.textContent = "ещё...";
      button.onclick = (event) => {
        [...currentContentList]
          .splice(3, currentContentList.length - 1)
          .forEach(el => el.removeAttribute("hidden"));
        event.target.remove();
      };

      el.insertAdjacentElement("beforeend", button);
    };
  });
};