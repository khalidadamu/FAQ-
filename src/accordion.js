const acc = document.getElementsByClassName("accordion__container");
let currentlyOpen = null;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close the currently open accordion
    if (currentlyOpen && currentlyOpen !== this) {
      currentlyOpen.classList.remove("active");
      let currentPanel = currentlyOpen.nextElementSibling;
      currentPanel.style.maxHeight = null;
    }

    // Toggle the clicked accordion
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    // Update the currently open accordion
    currentlyOpen = this.classList.contains("active") ? this : null;
  });
}
