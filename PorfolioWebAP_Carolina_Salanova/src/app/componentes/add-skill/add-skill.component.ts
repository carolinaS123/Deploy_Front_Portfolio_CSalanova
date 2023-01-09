import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsModelo } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
   skill: string;
   porcentaje: number;


  constructor(private skillsServ:SkillsService, private formBuilder: FormBuilder, private router: Router)  {}
  
  ngOnInit(): void {
  }
    
  onCreate(): void{
    const habilidad = new SkillsModelo(this.skill, this.porcentaje);
    this.skillsServ.crearSkill(habilidad).subscribe(
      {
        next: data => {
        alert("Skill creada correctamente");
         this.router.navigate([''])
       }
       , 
       error: err =>{
       alert("Skill creada correctamente");
          this.router.navigate([''])
       }
      }
    )
  }


/*
  limpiar():void{
    this.form.reset();
  }
*/

  }


