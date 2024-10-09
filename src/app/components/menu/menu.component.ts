import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    imports: [RouterLink, RouterLinkActive]
})
export class MenuComponent {
    title = 'Curriculum-Vitae';
}
