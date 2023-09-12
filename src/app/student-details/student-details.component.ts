import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllStudentService } from '../all-student.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

public student:any = [];
public id:any = [];

constructor(private activatedRoute:ActivatedRoute, private studentService:AllStudentService){
  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

      studentService.getStudentdetails(this.id).subscribe(
        (data:any)=>{
          this.student = data;
        }
      )
    }
  )
}

}
