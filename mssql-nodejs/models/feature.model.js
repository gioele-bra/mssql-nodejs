//Classe utile a rappresentare le feature degli oggetti geojson
module.exports = class Feature{
    constructor(id, media, somma, geometry) {
        this.type = "Feature";
        this.properties = new Properties(id, media, somma);
        this.geometry = geometry; //Contiene la geometria del poligono.
    }
}


//Iniziamo a preparare la classe Properties che complicheremo in seguito
class Properties
{
    constructor(id, media, somma)
    {
        this.id = id;
        this.media = media;
        this.somma = somma;
    }
}