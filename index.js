// class DropDownMenu {
//   constructor(button, menuItems) {
//     this.button = button
//     this.menuItems = menuItems
//   }

//   buttonEventListener() {
//     this.button.addEventListener('click', () => {
//       this.menuItems.forEach((item) => {
//         item.hidden = !item.hidden;
//       })
//     })
//   }
// }
exports.newDropDownMenu = function (button, menuItemContainer) {
  button.addEventListener("click", () => {
    menuItemContainer.style.display =
      menuItemContainer.style.display === "none" ? "block" : "none";
  });
};
