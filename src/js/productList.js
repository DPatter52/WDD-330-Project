import { renderListWithTemplate } from "./utils";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
  }

  prepareTemplate(template, product) {
    template.querySelector('a').href += product.Id;
    return template;
  }

  renderList(list) {
    this.listElement.innerHTML = '';
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate)
        
    } 
}
