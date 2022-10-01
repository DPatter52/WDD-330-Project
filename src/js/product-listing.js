import ProductData from './productData.js';
import ProductList from './productList.js';
import { getParams, loadHeaderFooter } from './utils.js';

loadHeaderFooter()

const category = getParams('category');
const dataSource = new ProductData();
const listElement = document.querySelector('.product-list');
const myList = new ProductList(category, dataSource, listElement);
myList.init();