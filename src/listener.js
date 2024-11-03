import {
  manageInventoryBtnHandler,
  removeInventoryPageBtnHandler,
} from "./handler";
import { addNewItemBtnHandler } from "./inventoryPage";
import { cartHandler, recordFormBtnHandler } from "./record";
import {
  addNewItemBtn,
  cart,
  manageInventoryBtn,
  recordBtn,
  removeInventoryPageBtn,
} from "./selector";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  removeInventoryPageBtn.addEventListener(
    "click",
    removeInventoryPageBtnHandler
  );
  addNewItemBtn.addEventListener("click", addNewItemBtnHandler);
  recordBtn.addEventListener("click", recordFormBtnHandler);
  cart.addEventListener("click", cartHandler);
};

export default listener;
