export class EducacionModelo {
    id: number;
    institucion : String;
    titulacion : String;
    inicio_edu : String;
    fin_edu : String;
    descripcion_edu : String;

    constructor(institucion:String,  titulacion:String, inicio_edu:String, fin_edu:String, descripcion_edu:String){
        this.institucion = institucion;
        this. titulacion =  titulacion;
        this. inicio_edu = inicio_edu;
        this.fin_edu = fin_edu;
        this.descripcion_edu = descripcion_edu;
    
    }
}
