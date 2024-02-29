exports.newDropDownMenu = function (button, menuItemContainer) {
  button.addEventListener("click", () => {
    menuItemContainer.style.display =
      menuItemContainer.style.display === "none" ? "block" : "none";
  });
};
