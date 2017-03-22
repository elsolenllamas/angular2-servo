import {Component} from 'angular2/core';
import {AppService} from './app.service';

@Component({
    selector: 'servo-app',
    template: `
    <p>sending grades of rotation to servo</p>
    <button (click)="setServo(180)">Rotate Servo to 180</button>
    <button (click)="setServo(0)">Rotate Servo to 0</button>
    `,
    providers: [AppService]
})

export class AppComponent { 

	constructor(private appService: AppService) {

		this.setServo();
	}

	setServo(value) {
    	this.appService.setServo(value);
 	}


}