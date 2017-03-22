import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
	constructor (
    	public http: Http
  	) {}

	setServo(value) {
		var url = 'http://--ip-here--/arduino/servo/5/' + value
        this.http.get(url).subscribe(
              result => this.data = result,
              error => this.errorAlert = {msg: error},
          );
	}
}

