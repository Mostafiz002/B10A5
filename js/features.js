document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("donation-section");
});
document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("transaction-section");
});

// Get the buttons
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");

// Define the active and inactive styles
function activateButton(activeBtn, inactiveBtn) {
  // Active button styles
  activeBtn.style.backgroundColor = "#B4F461";
  activeBtn.style.color = "#000";
  activeBtn.style.border = "none";

  // Inactive button styles
  inactiveBtn.style.backgroundColor = "transparent";
  inactiveBtn.style.color = "#000";
  inactiveBtn.style.border = "1px solid #DADEE2";
}

// Add event listeners for clicks
donationBtn.addEventListener("click", function () {
  activateButton(donationBtn, historyBtn);
});

historyBtn.addEventListener("click", function () {
  activateButton(historyBtn, donationBtn);
});
