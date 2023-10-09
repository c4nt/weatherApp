import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnChanges{
  

  @Input() apiResponse: any;
  
  cityName: string = '';
  cityTemp: Number = 0;
  cityWeather: string ='';
  weatherIcon: string = '';
  countryIcon: string = '';



  constructor(private weatherService: WeatherService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.apiResponse) {
      this.cityName = this.apiResponse.name;
      this.cityTemp = parseInt(this.apiResponse.main.temp);
      this.cityWeather = this.apiResponse.weather[0].description;
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.apiResponse.weather[0].icon}.png`;
      this.countryIcon = `https://flagsapi.com/${this.apiResponse.sys.country}/flat/64.png`;


    }
    
  }
  
}
