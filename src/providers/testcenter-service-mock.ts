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
        return Promise.resolve(testcenters.filter((testcenter: any) =>{
          let test:any=[];let rstval:boolean=false;
          test=testcenter.test;
          /* if(test!==null && key!==""){
            test.forEach(element => {
              if(element.testname.toUpperCase().indexOf(key)>-1)
              rstval=true;
            });
          }  */
          rstval=this.filterByTestName(test,key);
         return ((rstval)||(testcenter.category===category &&  (testcenter.name +  ' ' 
          +testcenter.address +  ' ' + testcenter.city).toUpperCase().indexOf(key) > -1))}));
      }
      findByCategory(category:string){
        let key: string = category.toUpperCase();
        return Promise.resolve(testcenters.filter((testcenter: any) =>
            (testcenter.category).toUpperCase().indexOf(key) > -1)); 
      }
      findByNameAndOrderByCost(testname:string, testcenter_id:string):any{
        let key: string = testname.toUpperCase();
        var arrCenters=testcenters.filter((testcenter:any)=>{
          return (this.filterByTestName(testcenter['test'],key)&&testcenter.id!==testcenter_id);
        });
        let newObj=arrCenters.map(elem=>{
          let tests=elem['test'].filter((itm:any)=>{return (itm.testname.indexOf(testname)>-1)});
          return {id:elem.id,image:elem.thumbnail,centername:elem.name, address:elem.address,city:elem.city,testname:tests[0].testname,cost:tests[0].cost}
        });
        return Promise.resolve(newObj);
      }
      filterByTestName(test:any,key:string):boolean{
        let v:boolean=false;
        if(test!==null && key!==""){
          test.forEach(element => {
            if(element.testname.toUpperCase().indexOf(key)>-1)
              v=true;
          });
        }
        return v;
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