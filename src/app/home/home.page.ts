import { Component } from '@angular/core';
import { GraphPage } from '../graph/graph.page'
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  graph = GraphPage;
  data: any;
  constructor(
    private navController: NavController,
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) {}

  opendetails() {
    const id = 555;
    //this.router.navigate(["/graph", id]);

    let navigationExtras: NavigationExtras = {
      state: {
        user: "555"
      }
    };
    this.router.navigate(["graph"], navigationExtras);
  }

  scan() {

    this.barcodeScanner
      .scan({
        preferFrontCamera: false, // iOS and Android
        showFlipCameraButton: false, // iOS and Android
        showTorchButton: true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        prompt: "Scanne le code du module Asthme3000", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        //formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        //orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        //disableAnimations: true, // iOS
        //disableSuccessBeep: false // iOS and Android
      })
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
      })
      .catch(err => {
        console.log("Error", err);
      });

      



  }


  

}

