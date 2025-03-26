import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-sort-data',
  templateUrl: './sort-data.component.html',
  styleUrls: ['./sort-data.component.scss']
})
export class SortDataComponent {
  usersName:any
  sortOrder: string = 'asc'; 

  constructor(private mainService:MainService){
    this.mainService.getAllUsers().subscribe(res=>{
      this.usersName = res

  });
}
toggleSortOrder() {
  this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
}


}
