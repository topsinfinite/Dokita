import {Injectable} from '@angular/core';
import testcenters from './mock-testcenters';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class TestCenterService {
    findAll() {
        return Promise.resolve(testcenters);
      }
    
      findById(id) {
        return Promise.resolve(testcenters[id]);
      }
    
      findByName(searchKey: string, category:string) {
        let key: string = searchKey.toUpperCase();
        return Promise.resolve(testcenters.filter((testcenter: any) =>
          testcenter.category===category &&  (testcenter.name +  ' ' +testcenter.address +  ' ' + testcenter.city + ' ' + testcenter.test.testname).toUpperCase().indexOf(key) > -1));
      }
      findByCategory(category:string){
        let key: string = category.toUpperCase();
        return Promise.resolve(testcenters.filter((testcenter: any) =>
            (testcenter.category).toUpperCase().indexOf(key) > -1)); 
      }
      findByCategoryObservable(category:string){
        let key: string = category;
        return testcenters
        .filter((testcenter:any)=>testcenter.category===(key))
        .map(res=>{return res});
        
        /* .filter((testcen:any)=>{
          (testcen.category).toUpperCase().indexOf(key)>-1;
        }) */
           
    
          
         
      }
}