import { Component, OnInit } from '@angular/core';
import { MyDemoServiceService } from '../my-demo-service.service';
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'],
  providers:[MyDemoServiceService]
})
export class FourComponent implements OnInit {

  constructor(private myService: MyDemoServiceService) { }

  ngOnInit() {
  }
  public data:string = "";

  getService() {
    this.data += this.myService.getMessage();
    console.log('From Fourth Component');
  }

}
