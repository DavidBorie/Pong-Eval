//implementation classe terrain
class Terrain{
    /**
     * constructeur de la classe Terrain
     * @param $element
     */
    constructor($element){
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    /**
     * fonction d'ecoute des touches
     * @param joueur0
     * @param joueur1
     * @param raquetteGauche
     * @param raquetteDroite
     */
    jouer(joueur0, joueur1, raquetteGauche, raquetteDroite){
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) { return}
            if(event.key === "↑"){
                raquetteGauche.monter();
            }
            else if (event.key === "↓"){
                raquetteGauche.descendre();
            }
            else if (event.key === "↓"){
                raquetteDroite.monter();
            }
            else if (event.key === "↑"){
                raquetteDroite.descendre();
            }
            event.preventDefault();
          }, true);

          window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) { return}
            if(event.key === "↑" || event.key === "↓"){
                raquetteGauche.arreterDeBouger();
            }
            else if(event.key === "↓" || event.key === "↑"){
                raquetteDroite.arreterDeBouger();
            }
            event.preventDefault();
          }, true);
    }
  }
  