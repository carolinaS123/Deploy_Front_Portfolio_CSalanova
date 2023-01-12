import { Component, OnInit, Input } from '@angular/core';
import { SkillsModelo } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NumberValueAccessor } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skillsModelo: SkillsModelo=null;
 

  constructor(private skillServ: SkillsService, private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillServ.buscarSkill(id).subscribe(
      {
        next: data => {
          this.skillsModelo = data;
        }
        , 
        error: err => {
          alert("Error al editar el skill");
          this.router.navigate(['']);
        }
      }  
    )
  }
  
 onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.skillsModelo != undefined){
     this.skillServ.editarSkill(id, this.skillsModelo).subscribe(
       {
         next: data => {
          alert("El skill se editó correctamente");
           this.router.navigate(['']);
         }
         , 
         error: err => {
           alert("Error al editar el skill");
           this.router.navigate(['']);
         }
       } 
      ) 
    }
  }

}
