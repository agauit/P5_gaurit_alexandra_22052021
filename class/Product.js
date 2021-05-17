
import Cart from "./Cart.js";

export default class Product {
    /**
     * @desc on récupère les données pour créer un exemplaire d'un produit
     * @param {Object} donnees Les informations d'un produit
     * @param {string} donnees.imageUrl
     * @param {number} donnees._id
     * @param {string} donnees.description
     * @param {string} donnees.name
     * @param {float} donnees.price
     */
    constructor(donnees) {
        this._id = undefined;
        this.imageUrl = undefined;
        this.name = undefined;
        this.description = undefined;
        this.price = undefined;

        Object.assign(this, donnees);
    }

    _onProductClick() {
        console.log("on doit ajouter le produit : ", this);
        // const cart = new Cart();
        // // cart.add(this);
        // console.log(cart);

        //On crée une variable qui défini la clé et renvoie ses values
        let productOnLocalStorage = [];
            productOnLocalStorage.push(this);
            localStorage.setItem("produit" , JSON.stringify(productOnLocalStorage));
            console.log(productOnLocalStorage);

    }

}
