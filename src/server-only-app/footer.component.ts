import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'footer-app',
    encapsulation: ViewEncapsulation.None,
    template: `
                <footer>{{ seoFooter }}</footer>
    `,
    styles: [`
    footer {
      padding-top: 15px;
    }
    .footer-padding{
      padding-top: 15px;
    }
  `]
})
export class FooterComponent {
    seoFooter = 'Footer - server only rendered component';
}