import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from './logger.service';

let nextId = 0;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({ selector: '[appSpy]' })
export class SpyDirective implements OnInit, OnDestroy {
  private id !: number;

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    debugger;
    this.id = ++nextId; 
    this.logger.log(`Spy #${this.id} onInit`);
    console.log(nextId);
  }

  ngOnDestroy() {
    this.logger.log(`Spy #${this.id} onDestroy`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
