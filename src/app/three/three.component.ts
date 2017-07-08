import { Component, OnInit } from '@angular/core';
import { MyDemoServiceService} from '../my-demo-service.service';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  providers: [MyDemoServiceService]
})
export class ThreeComponent implements OnInit {
 constructor(private myService: MyDemoServiceService) { }

  ngOnInit() {
  }
  public data:string = "";

  getService() {
    this.data += this.myService.getMessage();
    console.log('From Fourth Component');
  }
}
