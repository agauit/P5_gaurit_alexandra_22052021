/**
 * @desc on ajoute les produits au panier
 * @param {Object} donnees Les informations d'un produit
 * @param {string} donnees.imageUrl
 * @param {number} donnees._id
 * @param {string} donnees.description
 * @param {string} donnees.name
 * @param {float} donnees.price
 */

export default class Cart {
    constructor(donnees, quantity) {
        this._id = undefined;
        this.imageUrl = undefined;
        this.name = undefined;
        this.description = undefined;
        this.price = undefined;
        this.quantity = quantity;

        Object.assign(this, donnees);
    }

}