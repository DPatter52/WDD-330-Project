import { loadHeaderFooter } from "./utils.js";
import CartList from "./cartlist.js";

loadHeaderFooter();

const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();
