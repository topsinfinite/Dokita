import {Injectable} from '@angular/core';
import properties from './mock-properties';
import {Http,Response} from '@angular/http';

@Injectable()
export class PropertyService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];
  appointments:Array<any>=[];
  
  constructor(public http: Http) {
    this.http = http;
    }
  findAll() {
    return Promise.resolve(properties);
  }

  findById(id) {
    return Promise.resolve(properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>{
       let srcInx= (property.title +  ' '+ property.name + ' ' + property.address +  ' ' + property.city + ' ' 
        + property.description).toUpperCase()
        return srcInx.indexOf(key) > -1
      })
    );
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }
  addAppointment(appDetail:any){
    if(appDetail!==null){
      if(appDetail.category==="Doctor"){
        this.appointments.push({category:appDetail.category,testcenter:{}, doctor:appDetail.doctor,appdate:appDetail.appdate,apptime:appDetail.apptime,apptype:appDetail.apptype});
      }else{
        this.appointments.push({category:appDetail.category,doctor:{}, testcenter:appDetail.testcenter,appdate:appDetail.appdate,apptime:appDetail.apptime,apptype:appDetail.apptype});
      }
    return Promise.resolve(this.appointments);
    }
  }
  getAppointments(cat:string){
    return Promise.resolve(this.appointments.filter((appdetail:any)=>{
      return (appdetail.category).toUpperCase().indexOf(cat.toUpperCase()) > -1; 
    }));
  }
  removeAppointment(appDetail){
    let index = this.appointments.indexOf(appDetail);
    if (index > -1) {
      this.appointments.splice(index, 1);
    }
    return Promise.resolve();
  }
  getListDetails(){
    return this.http.get('assets/data/products.json')
      .map((response:Response)=>response.json());
  }

}
