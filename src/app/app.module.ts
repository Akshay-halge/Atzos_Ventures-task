import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailslistComponent } from './component/userdetailslist/userdetailslist.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './component/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NromalComponent } from './component/nromal/nromal.component';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { AscDscOrderPipe } from './pipes/asc-dsc-order.pipe';
import { SortDataComponent } from './component/sort-data/sort-data.component';



@NgModule({
  declarations: [
    AppComponent,
    UserdetailslistComponent,
    DialogComponent,
    NromalComponent,
    SortPipePipe,
    AscDscOrderPipe,
    SortDataComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,MatIconModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SortPipePipe]
})
export class AppModule { }
