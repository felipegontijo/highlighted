import { Component } from '@angular/core'

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent {
    heroTitle: string = 'The Knowledge Bank';
    heroDescription: string = 'Find good content on the web. Highlight it. Save it. Keep browsing. Retrieve it anytime.';
}
