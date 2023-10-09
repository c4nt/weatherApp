import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  teste = ''  
  
  title = 'weather';
  bgPhotoSrc: string = ''; 
  
  
  getBgPhoto(event:any) {
    this.bgPhotoSrc = `background-image: url(${event}); background-size: cover;`;
    
    console.log(`APPCOMP -->${this.bgPhotoSrc}`)

  }
}

