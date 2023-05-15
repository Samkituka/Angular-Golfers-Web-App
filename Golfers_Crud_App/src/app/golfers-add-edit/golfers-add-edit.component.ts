import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GolferService } from '../services/golfer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';


interface VAL {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-golfers-add-edit',
  templateUrl: './golfers-add-edit.component.html',
  styleUrls: ['./golfers-add-edit.component.scss']
})
export class GolfersAddEditComponent implements OnInit{

  golfersForm: FormGroup;
  
  education: VAL[]= [
    {value: 'High School or GED - 0', viewValue: 'High School or GED'},
    {value:'College Degree-1', viewValue:'College Degree'},
    {value: 'Bachelor-2',viewValue: 'Bachelor'},
    {value: 'Master-3',viewValue: 'Master'},
    {value:'Doctorat-4',viewValue:'Doctorat'}, 
  ];
  constructor (
    private _fb: FormBuilder, 
    private _gfService: GolferService,
    private _dialogRef: MatDialogRef<GolfersAddEditComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private _coreService : CoreService,
  ){
    this.golfersForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      Dob:'',
      gender:'',
      education:'',
      championship:'',
      wins:'',
      losses:'',
    });
  }

  ngOnInit(): void {
    this.golfersForm.patchValue(this.data);
  }

  onFormSubmit(){
    if (this.data){
      this._gfService.updateGolfer(this.data.id, this.golfersForm.value).subscribe({
        next: (val: any) => {
           this._coreService.openSnackBar('Golfer updated successfully');
           this._dialogRef.close(true);
        }, 
        error: (err: any) => {
          console.error(err);
        }
      });
    }
    else {
      this._gfService.addGolfer(this.golfersForm.value).subscribe({
        next: (val: any) => {
           this._coreService.openSnackBar('Golfer added successfully');
           this._dialogRef.close(true);
        }, 
        error: (err: any) => {
          console.error(err);
        }
      });
    }
    }
  }
