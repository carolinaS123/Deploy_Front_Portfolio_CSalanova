import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsModelo } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-add-skill', 
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
   skill: String;
   porcentaje: number;

   
  constructor(private skillsServ:SkillsService, private formBuilder: FormBuilder, private router: Router)  {}
  
  ngOnInit(): void {}
  

  onCreate(): void{
    const habilidad = new SkillsModelo(this.skill, this.porcentaje);
    this.skillsServ.crearSkill(habilidad).subscribe(
      {
        next: data => {
        alert("El skill fue creado correctamente");
         this.router.navigate([''])
       }
       , 
       error: err =>{
       alert("El skill no pudo ser creado");
          this.router.navigate([''])
       }
      }
    )
  }

  }


