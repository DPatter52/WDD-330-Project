import ProductList from "./productList";
import ProductData from "./productData";
import { loadHeaderFooter } from "./utils";

loadHeaderFooter();

const dataList = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const myList = new ProductList("tents", dataList, listElement);

myList.init();
