import products from "./initial";
import initialRun from "./initialReader";
import listener from "./listener";
import observe from "./observer";

class Invoice {
  init() {
    console.log("Start Invoice");
    initialRun(products);
    observe();
    listener();
  }
}

export default Invoice;
