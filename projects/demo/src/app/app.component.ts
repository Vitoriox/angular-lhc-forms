import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularLhcFormsComponent} from 'angular-lhc-forms';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, AngularLhcFormsComponent],
	templateUrl: './app.component.html',
	standalone: true,
	styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
