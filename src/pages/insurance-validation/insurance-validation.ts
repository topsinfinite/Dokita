import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { PropertyService } from '../../providers/property-service-mock';
import {WelcomePage} from '../welcome/welcome';
import {PropertyListPage} from '../property-list/property-list';

/**
 * Generated class for the InsuranceValidationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-insurance-validation',
  templateUrl: 'insurance-validation.html',
})
export class InsuranceValidationPage {
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

  constructor(public navCtrl: NavController,private service:PropertyService, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
    private toast: Toast,) {
      this.service.getListDetails()
      .subscribe((response)=>{
        this.products=response;
        //console.log(this.products);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceValidationPage');
  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
      } else {
        this.productFound = false;
        this.toast.show(`Product not found`, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  
  back(){
    this.navCtrl.push(WelcomePage);

  }
  book(){
    this.navCtrl.push(PropertyListPage);

  }


}
