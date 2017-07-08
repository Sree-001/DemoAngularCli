import { Component, OnInit } from '@angular/core';
import { MyDemoServiceService} from '../my-demo-service.service';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers:[MyDemoServiceService]
})
export class TwoComponent implements OnInit {

   constructor(private myService: MyDemoServiceService) { }

  ngOnInit() {
  }
  public data:string = "";

  getService() {
    this.data += this.myService.getMessage();
    console.log('From Fourth Component');
  }

}
