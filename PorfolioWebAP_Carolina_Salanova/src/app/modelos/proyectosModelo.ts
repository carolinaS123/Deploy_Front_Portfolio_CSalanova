export class ProyectosModelo {
    id! : number;
    nombre_proy : String;
    descripcion_proy : String;
    inicio_proy : String;
    fin_proy : String;
    imagen_proy : String;
    link_proy : String;

    constructor(nombre_proy:String, descripcion_proy:String, inicio_proy:String, fin_proy:String, imagen_proy:String, link_proy:String){
        this.nombre_proy = nombre_proy;
        this.descripcion_proy = descripcion_proy;
        this.inicio_proy = inicio_proy;
        this.fin_proy = fin_proy;
        this.imagen_proy = imagen_proy;
        this.link_proy = link_proy;
        
    }
}
