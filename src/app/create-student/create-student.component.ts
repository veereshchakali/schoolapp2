import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllStudentComponent } from '../all-student/all-student.component';
import { AllStudentService } from '../all-student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {

public studentForm: FormGroup = new FormGroup({
  name: new FormControl("",[Validators.required, Validators.minLength(4)]),
  class: new FormControl(),
  fathername: new FormControl(),
  email: new FormControl(),
  dob: new FormControl(),
  address: new FormGroup({
    addressLine: new FormControl(),
    hno: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)])
  }),
  type: new FormControl(),
  busFee: new FormControl(),
  hostelFee: new FormControl(),
  marks: new FormArray([])
});

get marksFormArray(){
  return this.studentForm.get('marks') as FormArray;
}

addmarks(){
  this.marksFormArray.push(
    new FormGroup({
      class: new FormControl(),
      year: new FormControl(),
      percentage: new FormControl()
    })
  )
}

delete(i:number){
  this.marksFormArray.removeAt(i);
}

constructor(private studentServie:AllStudentService){}

submit(){
  console.log(this.studentForm.value);
this.studentServie.createStudents(this.studentForm.value).subscribe(
  (data:any)=>{
    alert("students created successfully");
  },
  (err:any)=>{
    alert("students creation Failed");
  }
)

}

}
