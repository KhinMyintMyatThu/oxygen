import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-township-modal',
  templateUrl: './township-modal.page.html',
  styleUrls: ['./township-modal.page.scss'],
})
export class TownshipModalPage implements OnInit {
  townshipLists = [];
  constructor(
    private modalController: ModalController
  ) {
    const township = {
      id: 0,
      name: 'Default'
    };
    this.townshipLists.push(township);

    firebase.firestore().collection('cities/PepwwnUk7QXZZMlC0UFR/townships')
      .orderBy('name', 'asc')
      .get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const township = {
            id: doc.id,
            ...doc.data()
          }
          this.townshipLists.push(township);
        })
      });
  }

  ngOnInit() {
  }

  chooseTownship(township) {
    const data = {
      townshipID: township.id,
      townshipName: township.name
    }
    this.modalController.dismiss(data);
  }

}
