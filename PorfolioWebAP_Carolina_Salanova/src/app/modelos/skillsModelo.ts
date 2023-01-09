export class SkillsModelo {
    id : number;
    skill : String;
    porcentaje : number;

    constructor(skill:String, porcentaje:number){
        this.skill = skill;
        this.porcentaje = porcentaje;
    }
}
