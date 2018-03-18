import { Component,ViewChild,ElementRef } from '@angular/core';
import * as moment from 'moment';
import {ActionSheetController, ModalController, ActionSheet, NavController, NavParams, ToastController,AlertController} from 'ionic-angular';
import {AppointmentListPage} from '../appointment-list/appointment-list';
import {CostCompareModal} from '../cost-compare/cost-compare';
import {PropertyService} from '../../providers/property-service-mock';
import {TestCenterService} from '../../providers/testcenter-service-mock';

import {Geolocation} from '@ionic-native/geolocation';
 
declare var google;

 @Component({
  selector: 'page-testcenter-detail',
  templateUrl: 'testcenter-detail.html',
})
export class TestCenterDetailPage {
  testcenter: any;
  appmtType:string;
  tests:any={};
  schedules:string[]=[];;
  appdate:any;
  isSet:boolean=false;
  appointmentCount:any=0;
  appDetail:any;
  category:string="Testing";
  appointments:any;
  selectOptions:any={};
  isSelected:boolean=false;
  selectedTest:any={};
  currentLocation:any={};
  markerIcon:any={start:google.maps.Animation.DROP,end:google.maps.Animation.BOUNCE};
  distance:any;
  duration:any;
  baseIconUrl:string="";
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directionService=new google.maps.DirectionsService;
  directionDisplay=new google.maps.DirectionsRenderer({suppressMarkers:true});
 
  constructor(public alertCtrl: AlertController,public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,public geolocation:Geolocation, public navParams: NavParams,public testService:TestCenterService, public propertyService: PropertyService, public toastCtrl: ToastController) {
     
      this.testcenter=this.navParams.data;
      this.tests=this.testcenter.test;
      this.getPendingAppointCount();
    //console.log(this.testcenter);
  } 

  ionViewDidLoad(){
    this.appdate=new Date().toISOString();
    this.selectOptions = {
      title: 'Select Test/Procedure/Imaging',
      mode: 'ios'
    };
    this.appmtType=this.tests[0];
    this.loadMap();

  }
  loadMap(){
    let dest_latLng = new google.maps.LatLng(this.testcenter.lat, this.testcenter.long);
    this.geolocation.getCurrentPosition().then((pos)=>{
      let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
      
      this.directionDisplay.setMap(this.map);
      this.calculateAndDisplayRoute(this.map, latLng,dest_latLng);
      //this.addMarker(dest_latLng,this.markerIcon.end);

    },
  (err)=>{
    console.log(err);
  });
   
  }
  addMarker(map,center,icon){
    let marker =new google.maps.Marker({
      map:map,
      animation:icon,
      position:center
    })
    let contentString=`<div><h3>${this.testcenter.name}</h3>
    <p>${this.testcenter.address},${this.testcenter.city}</p>
    </div>`;
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker,'click', function() {
      infowindow.open(map, marker);
    });

  }
  calculateAndDisplayRoute(map,origin,dest){
    this.directionService.route({
      origin:origin,
      destination:dest,
      travelMode:'DRIVING'
    },(response,status)=>{
      if(status==='OK'){
        this.directionDisplay.setDirections(response);
         
        var leg=response.routes[0].legs[0];
        this.addMarker(map,leg.start_location,this.markerIcon.start);
        this.addMarker(map,leg.end_location,this.markerIcon.end);
        this.distance=leg.distance.text;
        this.duration=leg.duration.text;
      }else
      {
        window.alert('Direction request failed: '+ status);
      }
    });
    
  }
   
  presentCostCompareModal() {
    this.testService.findByNameAndOrderByCost(this.appmtType,this.testcenter.id)
    .then(data=>{
      console.log(data);
      let costCompModal = this.modalCtrl.create(CostCompareModal, {testcenter:this.testcenter, test: this.selectedTest,testList:data});
    costCompModal.present();
    });
   
  }
  clickOption(){
    this.isSelected=true;
   // this.appmtType=this.tests[0];
  }
  testSelected(newval) {
    this.selectedTest = this.tests.find((f)=>{
      return f.testname=== newval;
    });
    this.tests.test=this.selectedTest;
}
  changeDate(dateval){
      this.isSet=true;
      this.schedules=this.testcenter.scheduleTime;
  }
  logAppointment(evt){
    this.confirmAppointment(evt);
     //console.log(evt);
  }
  goAppointment(appdetail){
    this.navCtrl.push(AppointmentListPage,this.appointments);
}
  confirmAppointment(timepicked) {
    this.appdate=moment(this.appdate).format('D MMM YYYY');
     let confirm = this.alertCtrl.create({
       title: 'Kindly confirm your appointment',
       message: `Your scheduled appointment is with : ${this.testcenter.name} Appointment Type: ${this.appmtType} Date: ${this.appdate } Time: ${timepicked}`,
       buttons: [
         {
           text: 'Cancel',
           handler: () => {
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Confirm',
           handler: () => {
               this.appDetail={
                   testcenter:this.testcenter,
                   category:this.category,
                   appdate:this.appdate,
                   apptime:timepicked,
                   apptype:this.appmtType
               }
              this.propertyService.addAppointment(this.appDetail);
              this.getPendingAppointCount();
              let toast = this.toastCtrl.create({
                 message: 'Successfully added to your appointments',
                 cssClass: 'mytoast',
                 duration: 1000
             });
             toast.present(toast);
           }
         }
       ]
     });
     confirm.present();
   }
   getPendingAppointCount(){
    this.propertyService.getAppointments(this.category)
    .then(data=>{
      this.appointments={category:this.category,appointmentList:data};
      this.appointmentCount=data.length
    });
  }
  getCategory(){
    if(this.testcenter!==null){
      switch(this.testcenter.category){
        case "lab":
        return  "Laboratory";
        case "procedure":
        return "Procedure";
        case "imaging":
        return "Imaging"

      }
    }
  }
  share(testcenter) {
    let actionSheet: ActionSheet = this.actionSheetCtrl.create({
        title: 'Share via',
        buttons: [
            {
                text: 'Twitter',
                handler: () => console.log('share via twitter')
            },
            {
                text: 'Facebook',
                handler: () => console.log('share via facebook')
            },
            {
                text: 'Email',
                handler: () => console.log('share via email')
            },
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => console.log('cancel share')
            }
        ]
    });

    actionSheet.present();
}

}
