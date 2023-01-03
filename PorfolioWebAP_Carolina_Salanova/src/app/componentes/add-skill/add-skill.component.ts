import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsModelo } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  form: FormGroup;
  skill: string="";
  porcentaje: number = 0;
 
  constructor(private formBuilder:FormBuilder, private skillsServ:SkillsService) 
  {
    this.form = this.formBuilder.group({
      skill: ["", [Validators.required]],
      porcentaje: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
    });

  }

  ngOnInit(): void {
  }
   
  get Skill(){
    return this.form.get("skill");
  }
  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get SkillValidacion(){
    return this.Skill?.touched && !this.Skill.valid;
  }

  get PorcentajeValidacion(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }

  onCreate():void{
    const skl= new SkillsModelo(this.skill, this.porcentaje);
    this.skillsServ.crearSkill(skl).subscribe(data => {
       alert("Skill agregado");
       window.location.reload();
    }, err=>{
       alert("Fallo el agregado, intentelo de nuevo");
    });
  }

  limpiar():void{
    this.form.reset();
  }
}
