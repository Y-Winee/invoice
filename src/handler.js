import { inventoryPage} from "./selector";

export const manageInventoryBtnHandler = () => {
    console.log("You Click Manage Inventory Button");
    inventoryPage.classList.remove("translate-x-full");
}

export const removeInventoryPageBtnHandler = () => {
    console.log("You Click Remove Inventory Page Button");
    inventoryPage.classList.add("translate-x-full", "duration-300")
}

