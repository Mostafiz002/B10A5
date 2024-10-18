// toogle
function showSectionById(id) {
  // hide all the sections
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  // show the section
  document.getElementById(id).classList.remove("hidden");
}
