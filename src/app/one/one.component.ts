import { Component, OnInit } from '@angular/core';
import { MyDemoServiceService} from '../my-demo-service.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
   providers:[MyDemoServiceService]
})
export class OneComponent implements OnInit {

   constructor(private myService: MyDemoServiceService) { }

  ngOnInit() {
  }
  public data:string = "";

  getService() {
    this.data += this.myService.getMessage();
    console.log('From Fourth Component');
  }
}
