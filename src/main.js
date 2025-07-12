let dropddownDisplayed = false;
      
function toggleDropdown() {
    if (dropddownDisplayed) {
      document.getElementById("courses-dropdown").classList.remove("dropdown-active");
      document.getElementById("courses-dropdown-trigger").classList.remove("selected");
      dropddownDisplayed = false;
    } else {
      document.getElementById("courses-dropdown").classList.add("dropdown-active");
      document.getElementById("courses-dropdown-trigger").classList.add("selected");
      dropddownDisplayed = true;
    }
}
