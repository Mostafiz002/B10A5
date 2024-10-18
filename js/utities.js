// toogle
function showSectionById(id) {
  // hide all the sections
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  // show the section
  document.getElementById(id).classList.remove("hidden");
}

// Function to add donation to history
function addTransactionHistory(amount, region) {
  const transactionContainer = document.getElementById("transaction-container");

  // Create a new transaction entry
  const transactionEntry = document.createElement("div");
  transactionEntry.classList.add(
    "p-4",
    "mt-2",
    "mb-5",
    "border",
    "border-gray-300",
    "rounded-lg"
  );

  // Get the current date with time zone (GMT)
  const now = new Date();
  const dateString = now.toLocaleString("en-GB", {
    timeZoneName: "long",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Set the content
  transactionEntry.innerHTML = `
    <p class="font-medium text-xl">${amount} Taka is Donated for ${region}</p>
    <p class="font-normal rounded-lg p-2 mt-3 bg-gray-100 text-base">Date: ${dateString}</p>
  `;

  // Append the new transaction to the history container
  transactionContainer.appendChild(transactionEntry);
}
