import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proddial',
  templateUrl: './information-dialog.component.html',
  styleUrls:['./information-dialog.component.scss']
})
export class InformationModalComponent  {
  modalBody: any;
   
  constructor(public dialogRef: MatDialogRef<InformationModalComponent>, @Inject(MAT_DIALOG_DATA) modalInput,
    private fb: FormBuilder, private _router: Router ) {
    this.modalBody = modalInput.modalBody;  
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }  
}

