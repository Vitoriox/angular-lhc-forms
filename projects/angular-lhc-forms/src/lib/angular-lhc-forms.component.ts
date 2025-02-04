import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as testData from '../test/test-data-fhir.json'

declare var LForms: any; // Type declaration for LForms

const SCRIPTS_SRC = [
	'https://lhcforms-static.nlm.nih.gov/lforms-versions/36.3.2/webcomponent/assets/lib/zone.min.js',
	'https://lhcforms-static.nlm.nih.gov/lforms-versions/36.3.2/webcomponent/lhc-forms.js',
	'https://lhcforms-static.nlm.nih.gov/lforms-versions/36.3.2/fhir/lformsFHIRAll.min.js',
]

const STYLES_SRC = [
	'https://lhcforms-static.nlm.nih.gov/lforms-versions/36.3.2/webcomponent/styles.css'
]

@Component({
	selector: 'lib-angular-lhc-forms',
	template: `
		<div id="formContainer" #formContainer></div>
	`,
	standalone: true
})
export class AngularLhcFormsComponent implements OnInit, AfterViewInit {
	@ViewChild('formContainer') formContainer!: ElementRef;

	constructor(
		private renderer: Renderer2
	) {}

	ngOnInit() {
		this.loadScripts(SCRIPTS_SRC);
		this.loadStylesheets(STYLES_SRC);
	}

	ngAfterViewInit() {
		console.log('LIB WORKS')
		//TODO: Fix synchronization issues
		setTimeout(() => this.testLoad(), 1000)
	}

	private testLoad(){
		const options = {
			prepopulate: true
		};

		LForms.Util.addFormToPage(testData, 'formContainer', options);
	}

	private loadScripts(urls: string[]): void {
		urls.forEach(url => {
			const script = this.renderer.createElement('script');
			script.src = url;
			script.onerror = () => console.error(`Failed to load LHC-Form script: '${url}'`);
			this.renderer.appendChild(document.head, script);
		})
	}

	private loadStylesheets(urls: string[]): void {
		urls.forEach(url => {
			const link = this.renderer.createElement('link');
			link.rel = 'stylesheet';
			link.href = url;
			link.onerror = () => console.error(`Failed to load LHC-Form stylesheet: '${url}'`);
			this.renderer.appendChild(document.head, link);
		})
	}

}
