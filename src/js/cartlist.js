import { getLocalStorage, renderListWithTemplate } from "./utils";

export default class CartList {
    constructor(key, listElement) {
        this.key = key;
        this.listElement = listElement;
    }

   async init() {
        const list = getLocalStorage(this.key);
        this.renderlist(list);
    }

    renderlist(list) {
        this.listElement.innerHTML = '';
        const template = document.getElementById('cart-card-template');
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }

    prepareTemplate(template, product) {
        template.querySelctor('.cart-card__image img').src = product.Image;
        template.querySelctor('.cart-card__image img').alt += product.Name;
        template.querySelctor('.card__name').textContent = product.Name;
        template.querySelctor('.cart-card__color').textContent = product.Colors[0].ColorName;
        template.querySelctor('.cart-card__price').textContent += product.FinalPrice;
        return template;
    }

}