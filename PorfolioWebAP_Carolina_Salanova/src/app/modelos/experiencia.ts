export class Experiencia {
    id : number;
    empresa : String;
    puesto : String;
    inicio_exp : String;
    fin_exp : String;
    descripcion_exp : String;

    constructor(id:number, empresa:String, puesto:String, inicio_exp:String, fin_exp:String, descripcion_exp:String){
        this.id = id;
        this.empresa = empresa;
        this.puesto = puesto;
        this.inicio_exp = inicio_exp;
        this.fin_exp = fin_exp;
        this.descripcion_exp = descripcion_exp;
    
    }
}

