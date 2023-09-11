import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStudentService {

  constructor(private _httpClient:HttpClient) { }


getStudents():Observable<any>{
  return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students");
}

getfilterStudents(term:any):Observable<any>{
  return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter="+term);
}

getsortedStudents(column:any,order:any):Observable<any>{
  return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy="+column+"&order="+order);
}

createStudents(data:any):Observable<any>{
  return this._httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data);
}

getpagedStudents(limit:any,page:any):Observable<any>{
  return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?limit="+limit+"&page="+page);
}

deleteStudents(id:any):Observable<any>{
  return this._httpClient.delete("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id);
}

}

