import { Component, EventEmitter ,Output, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  @Output() notify = new EventEmitter()

  cityInputControl = new FormControl();
  inputControl: string = '';
  hideFlag: any;
  loadFlag:any;
  
  response:any
  bgPhotoSrc: string ='https://unsplash.com/photos/VvdPotiJshs';
 

  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    
    document.getElementById("formInput")?.focus()
  }

  getWeahterData() {
    this.inputControl = this.cityInputControl.value;
    this.loadFlag = 1;
    
    this.weatherService.getWeatherData(this.cityInputControl.value)
      .subscribe(res => {
        this.response = res;
        this.hideFlag = 0;
        this.loadFlag = 0;
        console.log(res)

      }, (error) => {

          this.hideFlag = 1;
          this.loadFlag = 0;

          console.log(`Error type: ${error}`)
        
        });
    
    }

    getBgPhotos() {

      if(this.cityInputControl.value) {

        this.weatherService.getPhotos(this.cityInputControl.value)
            .subscribe(res => {
                let n = Math.floor(Math.random() * 9);
                this.bgPhotoSrc = res.results[n].urls.regular
                this.notify.emit(this.bgPhotoSrc);
                console.log(`show -> ${this.cityInputControl.value}`)
            })
      }
    }

}
