import { loadHeaderFooter } from "./utils";
import CartList from "./cartlist.js";

loadHeaderFooter();

const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();
