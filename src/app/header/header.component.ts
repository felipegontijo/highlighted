import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    headerTitle: string = 'highlightED';
    firstLink: string = 'About';
    secondLink: string = 'Download';
    thirdLink: string = 'Login | Signup';
}