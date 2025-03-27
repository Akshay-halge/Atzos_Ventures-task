import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataType } from 'src/app/models/user-data-type';
import { MainService } from 'src/app/services/main.service';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-userdetailslist',
  templateUrl: './userdetailslist.component.html',
  styleUrls: ['./userdetailslist.component.scss']
})
export class UserdetailslistComponent {

  displayedColumns: string[] = ['createdAt', 'name','email','mobile', 'address','action'];    

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor( private mainService:MainService, public dialog: MatDialog) {
    this.getAllUsers()
  }
  getAllUsers(){
    this.mainService.getAllUsers().subscribe(res =>{
      console.log(res)
      this.dataSource = new MatTableDataSource<any>(res)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      

    })

  }

  openDialog(user?:any, isViewMode = false) {
    debugger
    const dialogRef = this.dialog?.open(DialogComponent,{
      width:'600px',
      data:{...user, isViewMode}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result && !isViewMode){
        if(user){
          console.log('User Before Update:', user.id, result); // Debugging
          this.mainService.updateUser(user.id, result).subscribe(()=>
            this.getAllUsers()
          )

        }else{
          this.mainService.addUser(result).subscribe(()=>
          this.getAllUsers())
        }

      }
    });
  }

  deleteUser(user:UserDataType){
    this.mainService.deleteUser(user).subscribe(()=>
    this.getAllUsers())

  }


  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


