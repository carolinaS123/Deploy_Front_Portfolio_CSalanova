export class ExperienciaModelo {
    id: number;
    empresa : String;
    puesto : String;
    inicio_exp : String;
    fin_exp : String;
    descripcion_exp : String;

    constructor(empresa:String, puesto:String, inicio_exp:String, fin_exp:String, descripcion_exp:String){
        this.empresa = empresa;
        this.puesto = puesto;
        this.inicio_exp = inicio_exp;
        this.fin_exp = fin_exp;
        this.descripcion_exp = descripcion_exp;
    
    }
}

