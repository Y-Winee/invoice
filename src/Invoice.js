import products from "./initial";
import initialRun from "./initialReader";
import listener from "./listener";

class Invoice {
  init() {
    console.log("Start Invoice");
    initialRun(products);
    listener();
  }
}

export default Invoice;
