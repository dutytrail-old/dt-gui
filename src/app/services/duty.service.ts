import { Injectable } from '@angular/core';
import { Eureka } from 'eureka-js-client';

@Injectable()
export class DutyService {

  constructor() { }

  getClient(): void {
    return new Eureka({
      instance: {
        app: 'dtgui',
        hostName: 'localhost',
        port: 8080,
        vipAddress: 'com.dutytrail',
        dataCenterInfo: {
          name: 'Heroku',
        },
      },
      eureka: {
        host: 'localhost',
        port: 8761,
      },
    });
  }
}
