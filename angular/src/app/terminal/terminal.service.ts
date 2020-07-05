import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { AppConfig } from '../config/app.service';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  private terminalContent: string = "";
  terminalOutput$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  executeCommand(command: string): void {

    let cmdExists = false;

    for (let i = 0; i < AppConfig.settings.commandMap.length; i++) {
      const cmd = AppConfig.settings.commandMap[i].command;
      const page = AppConfig.settings.commandMap[i].page;
      const text = AppConfig.settings.commandMap[i].text;
      const clear = AppConfig.settings.commandMap[i].clear;
      const caseSensitive = AppConfig.settings.commandMap[i].caseSensitive;

      let cmdStr = command;

      if (caseSensitive == null || caseSensitive === false) {
        cmdStr = cmdStr.toLocaleLowerCase();
      }

      if (cmd === cmdStr) {
        if (clear === true) {
          this.terminalContent = "";
        }
        if (page != null) {
          this.http.get(page, { responseType: 'text' }).subscribe(data => {
            this.terminalContent += data;
            this.terminalOutput$.next(this.terminalContent);
          });
        } else if (text != null) {
          this.terminalContent += text;
          this.terminalOutput$.next(this.terminalContent);
        }
        cmdExists = true;
        break;
      }
    }

    if (cmdExists === false) {
      if (command !== "") {
        this.terminalContent += "This command doesn't exist<br>";
      } else {
        this.terminalContent += "<br>";
      }
      this.terminalOutput$.next(this.terminalContent);
    }
  }
}
