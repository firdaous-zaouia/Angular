import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}


// const express = require("express");
// const bodyPaser = require("body-parser");
// const cors = require("cors");

// const PORT = 3000;

// const app = express();

// app.use(bodyPaser.json());

// app.use(cors());

// app.get("/", function (req, res) {
//   res.send("Hello from server");
// });

// app.post("/enroll", function (req, res) {
//   console.log(req.body);
//   res.status(200).send({ message: "Data received" });
// });

// app.listen(PORT, function () 
//   console.log("Server running on localhost:" + PORT);
// });
