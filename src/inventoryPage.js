import products from "./initial";
import {
  addNewItemInput,
  addNewItemPriceInput,
  inventoryList,
  selectItem,
  templateListNode,
} from "./selector";
import { v4 as uuidv4 } from "uuid";

export const addNewItemBtnHandler = () => {
  const list = templateListNode.content.cloneNode(true);
  const productName = list.querySelector("#productName");
  const productPrice = list.querySelector("#productPrice");

  const newProductId = uuidv4();
  const newProductName = addNewItemInput.value;
  const newProductPrice = addNewItemPriceInput.valueAsNumber;

  productName.innerText = newProductName;
  productPrice.innerText = newProductPrice;

  products.push({
    id: newProductId,
    name: newProductName,
    price: newProductPrice,
  });

  console.log(products);

  inventoryList.append(list);

  const option = new Option(newProductName, newProductId);
  selectItem.append(option);

  addNewItemInput.value = null;
  addNewItemPriceInput.value = null;
};
