/**
 * @desc on ajoute les produits au panier
 * @param {Object} donnees Les informations d'un produit
 * @param {string} donnees.imageUrl
 * @param {number} donnees._id
 * @param {string} donnees.description
 * @param {string} donnees.name
 * @param {float} donnees.price
 */
import Product from "./Product";


export default class Cart {

    constructor() {
        let content = localStorage.getItem("cart");
        if (content){
            this.content = JSON.parse(content);
        }
        else {
            this.content = {};
            this._updateLocalStorage();
        }
    }

    /**
     *
     * @param {Product} product
     */
    add(product){
        //si le produit n'est pas dans le panier, la valeur sera undefined
        if(this.content[product._id] === undefined){
            // L'objet littéral this.content aura une clé "product._id" , dont la valeur sera product
            this.content[product._id] = product;
        }else{
            //sinon, la valeur représente notre produit dans le panier, on a donc accès à sa quantity
            this.content[product._id].quantity += product.quantity;
        }

        //On synchronise le localstorage
        this._updateLocalStorage();
    }

    _updateLocalStorage(){
        localStorage.setItem("cart", JSON.stringify(this.content));
    }

    remove(product){
        this.content[product._id] = undefined;
        this._updateLocalStorage();
    }
    totalPrice(){
        let total = 0;
        for (let [_id, product] of Object.entries(this.content)){
            total += product.quantity * product.price;
        }
        console.log(total);
    }


    display() {
        for (let [_id, product] of Object.entries(this.content)) {
            const id = document.getElementById("cart_element");
            const title = document.createElement("p");
            title.innerText = product.name;
            id.appendChild(title);
            const quantity = document.createElement("p");
            quantity.innerHTML = product.quantity;
            id.appendChild(quantity);
            const div = document.createElement("div");
            div.appendChild(title);
            div.appendChild(quantity);
            id.appendChild(div); 
            div.classList.add("d-flex");
            div.classList.add("flex-row");
            div.classList.add("justify-content-around");
        }
        }



}
