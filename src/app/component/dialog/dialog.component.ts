import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDataType } from 'src/app/models/user-data-type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  userDetailsForm!:FormGroup
  isEditMode = false
  isViewMode = false


  constructor(private fb:FormBuilder ,public dialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any){

console.log(data)
  }
  ngOnInit(): void {
    this.isViewMode = this.data?.isViewMode || false;
    this.isEditMode = !!this.data?.id && !this.isViewMode; // Ensure Edit Mode works only if `id` exists

    this.userDetailsForm = this.fb.group({
      id:[{value:this.data.id || '', disabled:true}],
      createdAt: [{ value: this.data?.createdAt || '', disabled: this.isViewMode }, [Validators.required]],
      name: [{ value: this.data?.name || '', disabled: this.isViewMode }, [Validators.required]],
      mobile: [{ value: this.data?.mobile || '', disabled: this.isViewMode }, [Validators.required]], // Ensures 10-digit mobile number
      email: [{ value: this.data?.email || '', disabled: this.isViewMode }, [Validators.required]],
      address: [{ value: this.data?.address || '', disabled: this.isViewMode }, [Validators.required]]
    });


console.log('updated',this.userDetailsForm)

    
  }
  OnSubmit(){
    if (this.userDetailsForm.invalid) {
      console.error('Form Invalid:', this.userDetailsForm.errors);
      return; // Stop execution if form is invalid
    }
  
      console.log('Submitted Data:', this.userDetailsForm.value);
      // let formData = this.userDetailsForm.value
      let formData = this.userDetailsForm.getRawValue();
      const newUser: UserDataType = {
        id: this.data?.id,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        address: formData.address,
        createdAt: formData.createdAt,   
      };
  
      this.dialogRef.close(newUser);
      console.log(newUser)
    

  }

}
