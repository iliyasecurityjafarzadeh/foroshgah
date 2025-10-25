const addBtns = document.querySelectorAll(".add-btn");
const cartList = document.getElementById("cartList");
const totalEl = document.getElementById("total");
const searchBox = document.getElementById("searchBox");

let total = 0;

addBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.parentElement;
    const name = product.querySelector("h3").textContent;
    const price = Number(product.querySelector(".price").textContent);

    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "حذف";
    removeBtn.className = "remove";

    li.textContent = `${name} - ${price} هزار تومان`;
    li.appendChild(removeBtn);
    cartList.appendChild(li);

    total += price;
    totalEl.textContent = `جمع کل: ${total} تومان`;

    removeBtn.addEventListener("click", () => {
      li.remove();
      total -= price;
      totalEl.textContent = `جمع کل: ${total} تومان`;
    });
  });
});

searchBox.addEventListener("input", () => {
  const text = searchBox.value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(p => {
    const name = p.querySelector("h3").textContent.toLowerCase();
    p.style.display = name.includes(text) ? "block" : "none";
  });
});
