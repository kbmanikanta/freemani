import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [routerTransition()]
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
