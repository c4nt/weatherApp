import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnChanges{

  @Input() apiResponse: any;
  

  cityHumidity: string = '';
  cityWind: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const resFlag = changes['apiResponse']
    
    if(resFlag){
      this.cityHumidity = this.apiResponse.main.humidity;
      this.cityWind = this.apiResponse.wind.speed;
    }

  }
}
