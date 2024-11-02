import products from "./initial";
import { recordForm } from "./selector";

export const recordFormBtnHandler = (event) => {
  event.preventDefault();
  console.log("You Submit Form");
  const form = new FormData(recordForm);

  console.log(form.get("select_item"));
  console.log(form.get("quantity"));
  console.log(products.find(({ id }) => id == form.get("select_item")));
};
