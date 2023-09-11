import { Component } from '@angular/core';
import { AllStudentService } from '../all-student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent {

  public students:any = [];
  public  term:string = "";
  public column:string = "";
  public order:string = "";

  public limit:string = "";
  public page:string = "";

constructor(private studentService:AllStudentService){
  studentService.getStudents().subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

getfilterStudents(){
  this.studentService.getfilterStudents(this.term).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}
getsortedStudents(){
  this.studentService.getsortedStudents(this.column,this.order).subscribe(
    (data:any)=>{
      this.students = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

getpagedStudents(){
  this.studentService.getpagedStudents(this.limit,this.page).subscribe(
  (data:any)=>{
    this.students = data;
  },
  (err:any)=>{
    alert("Internal server error");
  }
  )
}

deleteStudents(id:any){
  this.studentService.deleteStudents(id).subscribe(
    (data:any)=>{
      alert("deleted Successfully");
      location.reload();
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}
}
