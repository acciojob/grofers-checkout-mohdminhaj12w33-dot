const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Prevent duplicate answer
  if (document.getElementById("ans")) return;

  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.id = "ans";
  cell.colSpan = 2;
  cell.innerText = total;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
