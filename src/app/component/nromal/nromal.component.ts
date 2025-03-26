import { Component } from '@angular/core';
import { SortPipePipe } from 'src/app/pipes/sort-pipe.pipe';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-nromal',
  templateUrl: './nromal.component.html',
  styleUrls: ['./nromal.component.scss']
})
export class NromalComponent {
  usersName:any = [];
  constructor(private mainService:MainService){
    debugger
    this.mainService.getAllUsers().subscribe(res=>{
      console.log(res)
      this.usersName = res.map(res => res.name)
      console.log(this.usersName)

    })

  }

}
