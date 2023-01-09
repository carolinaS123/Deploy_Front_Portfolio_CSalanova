export class Persona {
    id: number;
    nombre : String;
    apellido : String;
    titulo : String;
    acerca_de : String;
    url_foto : String;
    url_banner : String;
    name_usuario : String;
    email : String;
    password : String;
    

    constructor(nombre:String, apellido:String, titulo:String, acerca_de:String, url_foto:String, url_banner:String, name_usuario:String, email:String, password:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.acerca_de = acerca_de;
        this.url_foto = url_foto;
        this.url_banner = url_banner;
        this.name_usuario = name_usuario;
        this.email = email;
        this.password= password;
    }
}
