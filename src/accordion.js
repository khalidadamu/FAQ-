const acc = document.getElementsByClassName("accordion__container");
let currentlyOpen = null;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close the currently open accordion
    if (currentlyOpen && currentlyOpen !== this) {
      currentlyOpen.classList.remove("active");
      let currentPanel = currentlyOpen.nextElementSibling;
      currentPanel.style.maxHeight = null;
      // Reset the background color when closing
      currentlyOpen.style.backgroundColor = "black";
    }

    // Toggle the clicked accordion
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // Reset the background color when closing
      this.style.backgroundColor = "black";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // Change the background color when expanding
      this.style.backgroundColor = "wheat"; // Change this to your desired color
    }

    // Update the currently open accordion
    currentlyOpen = this.classList.contains("active") ? this : null;
  });
}
