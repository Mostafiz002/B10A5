const nInPut = document.getElementById("n-addMoney");
const fInPut = document.getElementById("f-addMoney");
const qInPut = document.getElementById("q-addMoney");
const nTotal = document.getElementById("n-total-fund");
const fTotal = document.getElementById("f-total-fund");
const qTotal = document.getElementById("q-total-fund");
const inventory = document.getElementById("inventory");

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
    }
    qInPut.value = "";
  }
});
