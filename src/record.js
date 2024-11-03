import products from "./initial";
import { v4 as uuidv4 } from "uuid";
import { cart, netTotal, recordForm, recordRow, tax, total } from "./selector";

export const recordFormBtnHandler = (event) => {
  event.preventDefault();
  console.log("You Submit Form");
  const form = new FormData(recordForm);

  const row = matchProducts(
    products.find(({ id }) => id == form.get("select_item")),
    form.get("quantity")
  );

  cart.append(row);
  recordForm.reset();
};

const matchProducts = ({ id, name, price }, amount) => {
  const row = recordRow.content.cloneNode(true);

  const productName = row.querySelector("#rowProductName");
  const productPrice = row.querySelector("#rowProductPrice");
  const category = row.querySelector("#rowProductCate");
  const quantity = row.querySelector("#rowProductQuantity");
  const cost = row.querySelector(".rowProductCost");

  const main = row.querySelector(".record-main");

  productName.innerText = name;
  productPrice.innerText = price + " MMK";
  category.innerText = "Fruit";
  quantity.innerText = amount;
  cost.innerText = price * parseInt(amount) + " MMK";

  main.setAttribute("selled-product", id);
  main.setAttribute("id", uuidv4());

  return row;
};

const calculateTotal = () => {
  let total = 0;
  document
    .querySelectorAll(".rowProductCost")
    .forEach((el) => (total += parseFloat(el.innerText)));

  return total;
};

const calculateTax = (total, percentage = 5) => {
  return total * (percentage / 100);
};

export const observeCart = () => {
  const updateTotal = () => {
    const totals = calculateTotal();
    const taxs = calculateTax(totals);

    total.innerText = totals;
    tax.innerText = taxs;
    netTotal.innerText = totals + taxs;
  };

  const config = { attributes: true, childList: true, subtree: true };
  const observer = new MutationObserver(updateTotal);
  observer.observe(cart, config);
};

export const cartHandler = (event) => {
  if(event.target.classList.contains("row-remove")){
    event.target.closest(".record-main").remove();
  }
}
