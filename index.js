let price = document.querySelector("#price");
let submitBtn = document.querySelector("#submitBtn");
let karatList = ["22k", "21k", "18k", "14k", "9k"];

submitBtn.addEventListener("click", () => {
  let existingContainer = document.querySelector(".container");
  if (existingContainer) {
    existingContainer.remove();
  }

  let twentyFourKPrice = price.value.trim();
  let allPrice = [];

  if (twentyFourKPrice <= 0 || twentyFourKPrice > 100000) {
    alert("Enter Correct Price");
    price.value = "";
    return;
  }
  let twentyTwoKPrice = (twentyFourKPrice / 100) * 91.67;
  let twentyOneKPrice = (twentyFourKPrice / 100) * 87.5;
  let eighteenKPrice = (twentyFourKPrice / 100) * 75;
  let fourteenKPrice = (twentyFourKPrice / 100) * 58.33;
  let nineKPrice = (twentyFourKPrice / 100) * 37.5;

  allPrice.push(twentyTwoKPrice.toFixed(0));
  allPrice.push(twentyOneKPrice.toFixed(0));
  allPrice.push(eighteenKPrice.toFixed(0));
  allPrice.push(fourteenKPrice.toFixed(0));
  allPrice.push(nineKPrice.toFixed(0));

  let div = document.createElement("div");
  div.classList.add("container");

  allPrice.forEach((singlePrice, i) => {
    let p = document.createElement("p");
    p.classList.add("gold-price-card");

    p.innerHTML = `Gold Price ${karatList[i]} : <br> ₹  ${singlePrice}`;

    div.appendChild(p);
  });

  document.body.appendChild(div);
});
