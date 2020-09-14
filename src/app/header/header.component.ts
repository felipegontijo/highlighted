import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    headerTitle = 'highlightED';
    firstLink = 'About';
    secondLink = 'Download';
    thirdLink = 'Login | Signup';
}
