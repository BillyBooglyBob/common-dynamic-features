


// function dropDownMenu() {
//     let menuButtons = document.getElementsByClassName("dropdown-toggle");
//     menuButtons = Array.from(menuButtons);

//     let menuContents = document.getElementsByClassName("dropdown-content");
//     menuContents = Array.from(menuContents);

//     // set menu content to be initially invisible
//     hideDropDownMenu(menuContents);

//     // shown the menu when hovering over the menu button
//     addDisplayDropDownMenu(menuContents, menuButtons);

//     // hide the menu when the mouse leaves the menu
//     addHideDropDownMenu(menuContents);
// }

// // show the drop down menu
// function showDropDownMenu(menuContents) {
//     menuContents.forEach(menuContent => {
//         menuContent.style.display = "block";
//     });
// }

// // add show drop down menu to the menu button
// function addDisplayDropDownMenu(menuContents, menuButtons) {
//     menuButtons.forEach(menuButton => { 
//         menuButton.addEventListener("mouseenter", () => showDropDownMenu(menuContents))
//     });
// }

// // hide the drop down menu
// function hideDropDownMenu(menuContents) {
//     menuContents.forEach(menuContent => {
//         menuContent.style.display = "none";
//     });
// }

// // add hide drop down menu to the menu
// function addHideDropDownMenu(menuContents) {
//     menuContents.forEach(menuContent => {
//         menuContent.addEventListener("mouseleave", () => hideDropDownMenu(menuContents));
//     });
// }

// dropDownMenu();


