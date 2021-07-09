import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { PhoneModalPage } from '../phone-modal/phone-modal.page';
import { TownshipModalPage } from '../township-modal/township-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading = true;
  stationLists = [];
  townshipName: any;

  constructor(
    private modalController: ModalController,
    private callNumber: CallNumber
  ) { }

  ionViewWillEnter() {
    this.fetchAllStations();
  }

  fetchAllStations() {
    firebase.firestore().collection('oxygen_stations')
      .orderBy('name', 'asc')
      .get().then((snapshot) => {
        snapshot.forEach((doc) => {
          this.loading = false;
          this.stationLists.push(doc.data());
        })
      });
  }

  async selectTownship() {
    const homeModal = await this.modalController.create({
      component: TownshipModalPage,
      cssClass: 'township-modal',
      backdropDismiss: true,
    });
    homeModal.onDidDismiss().then((params) => {
      const townshipID = params.data.townshipID;
      const townshipName = params.data.townshipName;
      if (townshipName === 'Default') {
        this.townshipName = null;
        this.fetchAllStations();
      } else {
        this.townshipName = params.data.townshipName + " Township";
        const townshipRef = firebase.firestore().doc('cities/PepwwnUk7QXZZMlC0UFR/townships/' + townshipID);
        firebase.firestore().collection('oxygen_stations')
          .where('township', '==', townshipRef)
          .get().then((snapshot) => {
            this.stationLists = [];
            snapshot.forEach(doc => {
              this.stationLists.push(doc.data());
            })
          })
      }

    });
    await homeModal.present();
  }

  async selectPhone(phNumbers) {
    const phoneModal = await this.modalController.create({
      component: PhoneModalPage,
      cssClass: 'phone-modal',
      backdropDismiss: true,
      keyboardClose: false,
      componentProps: {
        phNums: phNumbers
      }
    });

    phoneModal.onDidDismiss().then((params) => {
      const number = params.data.phNum;
      this.callNumber.callNumber(number, true);
    });

    await phoneModal.present();
  }
}
