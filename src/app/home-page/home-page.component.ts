import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  items: MenuItem[] | undefined;

    ngOnInit():void {
      console.log('aaaa');
        
    }
viewPdf(){
    console.log('ViewPdf')
}
}

