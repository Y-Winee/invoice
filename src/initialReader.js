import { inventoryList, selectItem, templateListNode } from "./selector";

const initialRun = (products) => {
  products.forEach(({ id, name, price }) => {
    const initialList = templateListNode.content.cloneNode(true);
    const productName = initialList.querySelector("#productName");
    const productPrice = initialList.querySelector("#productPrice");
    productName.innerText = name;
    productPrice.innerText = price;
    inventoryList.appendChild(initialList);

    const option = new Option(name, id);
    selectItem.append(option);
  });
};

export default initialRun;