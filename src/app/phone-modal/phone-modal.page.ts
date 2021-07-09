import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.page.html',
  styleUrls: ['./phone-modal.page.scss'],
})
export class PhoneModalPage implements OnInit {
  phNums = [];

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {
    this.phNums = this.navParams.get('phNums');
  }

  ngOnInit() {
  }

  choosePhone(number){
    const data = {
      phNum: number
    }
    this.modalController.dismiss(data);
  }

}
