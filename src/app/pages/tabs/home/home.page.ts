import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateTaskComponent } from 'src/app/shared/components/add-update-task/add-update-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: Task[] = [
    {
      id: '1',
      titulo: 'Autenticacion con google',
      descripcion: 'Crear una funcion que permite autenticar un usuario con google.',
      items: [
        {nombre: 'Actividad 1', completado: true},
        {nombre: 'Actividad 2', completado: true},
        {nombre: 'Actividad 3', completado: false},
      ]
    },
    {
      id: '2',
      titulo: 'Autenticacion con google',
      descripcion: 'Crear una funcion que permite autenticar un usuario con google.',
      items: [
        {nombre: 'Actividad 1', completado: true},
        {nombre: 'Actividad 2', completado: true},
        {nombre: 'Actividad 3', completado: false},
      ]
    },
    {
      id: '3',
      titulo: 'Autenticacion con google',
      descripcion: 'Crear una funcion que permite autenticar un usuario con google.',
      items: [
        {nombre: 'Actividad 1', completado: true},
        {nombre: 'Actividad 2', completado: true},
        {nombre: 'Actividad 3', completado: false},
      ]
    },
  ]

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.addOrUpdateTask(this.tasks[0])
  }

  getPercentage(task: Task) {
    return this.utils.getPercentage(task);
  }

  addOrUpdateTask(task?: Task) {  
    this.utils.presentModal({
      component: AddUpdateTaskComponent,
      componentProps: {task},
      cssClass: 'add-update-modal',
    })
  }

}
