const nInPut = document.getElementById("n-addMoney");
const fInPut = document.getElementById("f-addMoney");
const qInPut = document.getElementById("q-addMoney");
const nTotal = document.getElementById("n-total-fund");
const fTotal = document.getElementById("f-total-fund");
const qTotal = document.getElementById("q-total-fund");
const inventory = document.getElementById("inventory");

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
    timeZone: "GMT",
    timeZoneName: "short",
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

// blog page
const blogBtn = document.getElementById("blogBtn");
blogBtn.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// Noakhali fund
document.getElementById("n-fundBtn").addEventListener("click", function () {
  const value = nInPut.value;
  const valueNum = Number(value);

  const totalNum = Number(nTotal.innerText);
  const inventoryNum = Number(inventory.innerText);

  if (isNaN(valueNum) || valueNum < 0) {
    alert("Please enter a valid number.");
    return;
  } else {
    nTotal.innerText = totalNum + valueNum;
    if (inventory.innerText < 0) {
      alert("Insufficient inventory.");
      return;
    } else {
      inventory.innerText = inventoryNum - valueNum;
      // Add transaction to history
      addTransactionHistory(valueNum, "Flood at Noakhali, Bangladesh");
      // modal
      const myModal = document.getElementById("my_modal_1");
      myModal.showModal();
      alert("Donation successful.");
    }

    nInPut.value = "";
  }
});

// Feni fund
document.getElementById("f-fundBtn").addEventListener("click", function () {
  const value = fInPut.value;
  const valueNum = Number(value);

  const totalNum = Number(fTotal.innerText);
  const inventoryNum = Number(inventory.innerText);

  if (isNaN(valueNum) || valueNum < 0) {
    alert("Please enter a valid number.");
    return;
  } else {
    fTotal.innerText = totalNum + valueNum;
    if (inventory.innerText < 0) {
      alert("Insufficient inventory.");
      return;
    } else {
      inventory.innerText = inventoryNum - valueNum;
      // Add transaction to history
      addTransactionHistory(valueNum, "Flood Relief in Feni,Bangladesh");
      // modal
      const myModal = document.getElementById("my_modal_1");
      myModal.showModal();
      alert("Donation successful");
    }
    fInPut.value = "";
  }
});

// Quota fund
document.getElementById("q-fundBtn").addEventListener("click", function () {
  const value = qInPut.value;
  const valueNum = Number(value);

  const totalNum = Number(qTotal.innerText);
  const inventoryNum = Number(inventory.innerText);

  if (isNaN(valueNum) || valueNum < 0) {
    alert("Please enter a valid number.");
    return;
  } else {
    qTotal.innerText = totalNum + valueNum;
    if (inventory.innerText < 0) {
      alert("Insufficient inventory.");
      return;
    } else {
      inventory.innerText = inventoryNum - valueNum;
      // Add transaction to history
      addTransactionHistory(valueNum, "Aid for Injured in the Quota Movement");
      // modal
      const myModal = document.getElementById("my_modal_1");
      myModal.showModal();
      alert("Donation successful");
    }
    qInPut.value = "";
  }
});
