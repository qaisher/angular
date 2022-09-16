import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  //_url = 'https://jsonplaceholder.typicode.com/posts';
  _url = environment.url;
  constructor(private _http: HttpClient) { }


  enroll(body: any){

    // const postBody = {
    //   title : body.firstName,
    //   body : body.lastName,
    //   userId : body.email
    // }

    const postBody = {
      firstName : body.firstName,
      lastName : body.lastName,
      email : body.email
    }
    console.log(postBody);
    //console.log(this._http.post<any>(this._url, user));
    return this._http.post<any>(this._url, postBody)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
