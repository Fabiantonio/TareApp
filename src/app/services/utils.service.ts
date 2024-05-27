import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private modalController: ModalController) { }

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
  
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if(data) {
      return data
    }
  }

  dismissModal(data?: any){
    this.modalController.dismiss(data);
  }

  getPercentage(task: Task) {
    let completedItems = task.items.filter(item => item.completado).length;
    let totalItems = task.items.length;
    let percentage = (100/totalItems) * completedItems
    return parseInt(percentage.toString())
  }

}
