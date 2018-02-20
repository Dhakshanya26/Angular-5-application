import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers:[AlertService]
})
export class AlertComponent implements OnInit {
 message: any;
  constructor(private alertService: AlertService) {
    this.message= null;
   }

  ngOnInit() {
    this.alertService.getMessage().subscribe(x=> this.message =x);
  }

}
