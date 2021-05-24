/**
 * @desc on ajoute les produits au panier
 * @param {Object} donnees Les informations d'un produit
 * @param {string} donnees.imageUrl
 * @param {number} donnees._id
 * @param {string} donnees.description
 * @param {string} donnees.name
 * @param {float} donnees.price
 */

import Product from "./Product.js";

export default class Cart {

    constructor() {
        let content = localStorage.getItem("cart");
        if (content){
            this.content = JSON.parse(content);
        }
        else {
            this.content = [];
            this._updateLocalStorage();
        }
    }

    /**
     *
     * @param {Product} product
     */
    add(product){
        this.content.forEach(productInCart => {
            console.log(productInCart._id, product._id);
            if(productInCart._id === product._id){
                productInCart.quantity += product.quantity;
                this._updateLocalStorage();
                
            }
        });
        this.content.push(product);
        this._updateLocalStorage();
        console.log(product, this);

    }

    _updateLocalStorage(){
        localStorage.setItem("cart", JSON.stringify(this.content));
    }

}