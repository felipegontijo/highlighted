import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent {
    heroTitle = 'The Knowledge Bank';
    heroDescription = 'Save content from the web with one click. Then keep browsing and easily access it when you need it.';
}
