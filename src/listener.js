import {
  manageInventoryBtnHandler,
  removeInventoryPageBtnHandler,
} from "./handler";
import { addNewItemBtnHandler } from "./inventoryPage";
import { recordFormBtnHandler } from "./record";
import {
  addNewItemBtn,
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
};

export default listener;
