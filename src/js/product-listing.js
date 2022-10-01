import ProductList from "./productList";
import ProductData from "./productData";

const dataList = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const myList = new ProductList("tents", dataList, listElement);

myList.init();