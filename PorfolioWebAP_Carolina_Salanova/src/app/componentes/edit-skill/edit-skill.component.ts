import { Component, OnInit } from '@angular/core';
import { SkillsModelo } from 'src/app/modelos/skillsModelo';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skillsModelo: SkillsModelo;

  constructor( private skillServ: SkillsService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.buscarSkill(id).subscribe(
      data => {
        this.skillsModelo = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    if(this.skillsModelo != undefined){
     this.skillServ.editarSkill(id, this.skillsModelo).subscribe(
       {  
         next: data => {
           this.router.navigate([''])
         }
         , 
         error: err => {
           alert("Error al modificar el skill");
           this.router.navigate(['']);
         }
       } 
      )
     }
  }

}
