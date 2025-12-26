const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const table = document.querySelector("table");

  // Prevent duplicate total row
  if (document.getElementById("total-row")) return;

  // Create total row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
