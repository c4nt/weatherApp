import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

const apiKey = "162ee770235218a01261478be1376251";
const unsplashKey = 'oTtnjo6a149IoBs87uRONSMexG1dLOOlXeaPgX8XJ1w'

@Injectable({

  providedIn: 'root'

})

export class WeatherService {

  //${city}&units=metric&appid=${apiKey}

  apiCountyUrl = "https://flagsapi.com/BR/flat/64.png"

  readonly apiUrl:string;
  readonly unsplahsUrl:string;


  data = {}
  errorFlag:any

  constructor( private http : HttpClient) {

    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?`
    this.unsplahsUrl = 'https://api.unsplash.com/search/photos?'
   }

    getPhotos(city:string): Observable<any> {
      return this.http.get<any>(`${this.unsplahsUrl}query=${city}&auto=format&client_id=${unsplashKey}`)

    }

    getWeatherData(city:string): Observable<any> {

      return this.http.get<any>(`${this.apiUrl}q=${city}&units=metric&appid=${apiKey}`)
        .pipe(
          catchError(this.handleError())
        ); 
   }

    private handleError<T>(){
      return (error:any): Observable<T> => {
        return throwError(error.status);
      }
   }
}
