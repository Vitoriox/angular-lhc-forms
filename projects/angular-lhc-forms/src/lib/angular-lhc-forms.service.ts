import {Injectable} from '@angular/core';
import * as testData from '../test/test-data-fhir.json';

declare var LForms: any; // Type declaration for LForms

@Injectable({
	providedIn: 'root'
})
export class AngularLhcFormsService {

	//The goal is to wrap all the Lforms.Util API in type-safe methods in this service

	addFormToPage(formDef: any, container: string | HTMLElement, options?: any): void {
				LForms.Util.addFormToPage(testData, container, options);
	}
}
