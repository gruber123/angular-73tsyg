import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = [];
  prevMsg = '';
  prevMsgCount = 1;

  log(msg: string)  {
    debugger;
    console.log({msg, prevMsg: this.prevMsg, logs: this.logs, prevMsgCount: this.prevMsgCount});
    if (msg === this.prevMsg) {
      // Repeat message; update last log entry with count.
      this.logs[this.logs.length - 1] = msg + ` (${this.prevMsgCount += 1}x)`;
    } else {
      // New message; log it.
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
    console.log({msg, prevMsg: this.prevMsg, logs: this.logs, prevMsgCount: this.prevMsgCount});
  }

  clear() { this.logs = []; }

  // schedules a view refresh to ensure display catches up
  tick() {  this.tick_then(() => { }); }
  tick_then(fn: () => any) { setTimeout(fn, 0); }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/