import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 1.0079, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 4.0026, symbol: 'Mg'},
  {position: 13, name: 'Aluminium', weight: 6.941, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 9.0122, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 10.811, symbol: 'P'},
  {position: 16, name: 'Sulphur', weight: 12.0107, symbol: 'S'},
  {position: 17, name: 'chlorine', weight: 14.0067, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 15.9994, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 18.9984, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 20.1797, symbol: 'Ca'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 bigChart=[];
 cards=[];
 pieChart=[];

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource= new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static:true}) paginator: MatPaginator;
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards= this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }

}
