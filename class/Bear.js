

export default class Bear {
    /**
     * @desc on récupère les données pour créer un exemplaire d'ours
     * @param {Object} donnees Les informations d'un ours
     * @param {string} donnees.imageUrl
     * @param {number} donnees._id
     */
    constructor(donnees) {
        Object.assign(this, donnees);
    }

    /**
     * @desc On affiche un ours dans une galerie
     * @param galerie
     * @param page
     */
    display(galerie, page) {
        switch (page) {
            case "home" :
                const img = document.createElement("img");
                img.src = this.imageUrl;
                img.style.width = "100%";
                img.classList.add("card-img-top");
                const figure = document.createElement("figure");
                figure.appendChild(img);
                const figcaption = document.createElement("figcaption");
                figcaption.classList.add("card-body");
                figure.appendChild(figcaption);
                galerie.appendChild(figure);
                figure.style.width = "350px";
                figure.classList.add("card");
                const title = document.createElement("h2");
                title.innerText = this.name;
                const desc = document.createElement("p");
                desc.innerText = this.description;
                figcaption.appendChild(title);
                figcaption.appendChild(desc);
                const div = document.createElement("div");
                galerie.appendChild(div);
                div.appendChild(figure);
                const link = document.createElement("a");
                link.setAttribute("href", "./HTML/product.html?_id=" + this._id);
                div.appendChild(link);
                figure.appendChild(link);
                link.appendChild(img);
                link.appendChild(figcaption);
                link.appendChild(title);
                link.appendChild(desc);
                link.style.color = "black";
                link.style.textDecoration = "none";
                break;

            case "product" :
                console.log("c'est parti pour l'affichage du produit" , this);
                const image = document.createElement("img");
                image.src = this.imageUrl;

                const figureOurs = document.createElement("figure");
                figureOurs.appendChild(image);

                const figcaptionOurs = document.createElement("figcaption");
                figureOurs.appendChild(figcaptionOurs);

                const h2 = document.createElement("h2");
                figcaptionOurs.appendChild(h2);
                h2.innerHTML = this.name;

                const price = document.createElement("p");
                figcaptionOurs.appendChild(price);
                h2.appendChild(price);
                price.innerHTML = this.price;

                const color = document.createElement("div");
                figcaptionOurs.appendChild(color);
                h2.appendChild(color);
                color.innerHTML = this.colors;

                const p = document.createElement("p");
                figcaptionOurs.appendChild(p);
                h2.appendChild(p);
                p.innerHTML = this.description;

                const button = document.createElement("button");
                figcaptionOurs.appendChild(button);
                h2.appendChild(button);

                break;
            default :
                throw "La page " + page + " n'est pas reconnue";
        }

    }
}