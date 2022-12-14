import { renderListWithTemplate } from "./utils.js";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderlist(list);
    document.querySelector(".title").innerHTML = this.category;
  }

  renderlist(list) {
    this.listElement.innerHTML = "";
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
  }

  prepareTemplate(template, product) {
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Image;
    template.querySelector("img").alt = product.Name;
    template.querySelector(".card__brand").textContent = product.Brand.Name;
    template.querySelector(".card__name").textContent =
      product.NameWithoutBrand;
    template.querySelector(".prodcut-card__price").textContent +=
      product.FinalPrice;
    return template;
  }
}
