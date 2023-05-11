import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface VAL {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-golfers-add-edit',
  templateUrl: './golfers-add-edit.component.html',
  styleUrls: ['./golfers-add-edit.component.scss']
})
export class GolfersAddEditComponent {

  golfersForm: FormGroup;
  
  education: VAL[]= [
    {value: 'High School or GED - 0', viewValue: 'High School or GED'},
    {value:'College Degree-1', viewValue:'College Degree'},
    {value: 'Bachelor-2',viewValue: 'Bachelor'},
    {value: 'Master-3',viewValue: 'Master'},
    {value:'Doctorat-4',viewValue:'Doctorat'}, 
  ];
  constructor (
    private _fb: FormBuilder)
     {
    this.golfersForm = this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      championship:'',
      wins:'',
      losses:'',
    });
  }

  onFormSubmit(){
    if (this.golfersForm.valid){
      console.log(this.golfersForm.value);
    }
  }

}
