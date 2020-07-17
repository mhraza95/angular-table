import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Low Risk Category', weight: '#007E33', symbol: 'Species which are falling under the prescribed range of temperature and precipitation for the selected year  '},
  {position: 2, name: 'Moderate Risk Category', weight: '#FF8800', symbol: 'Species, which are falling under 10 - 20% higher variation in temp and precipitation for the selected year'},
  {position: 3, name: 'High Risk Category', weight: '#CC0000', symbol: 'Species, which are falling under the 20% or higher variation in temperature and precipitation for the selected year'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */