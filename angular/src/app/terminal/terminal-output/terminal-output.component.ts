import { Component, OnInit, OnDestroy, PipeTransform, Pipe } from '@angular/core';

import { Subscription } from 'rxjs';

import { TerminalService } from '../terminal.service';

@Component({
  selector: 'app-terminal-output',
  templateUrl: './terminal-output.component.html',
  styleUrls: ['./terminal-output.component.css']
})
export class TerminalOutputComponent implements OnInit, OnDestroy {

  private terminalOutput$: Subscription;
  terminalOutput: string;

  constructor(private terminalService: TerminalService) { }

  ngOnInit(): void {
    this.terminalOutput = "";
    this.terminalService.terminalOutput$.subscribe((output: string) => {
      this.terminalOutput = output;
    });

    this.terminalService.executeCommand('home');
  }

  ngOnDestroy(): void {
    if (this.terminalOutput$ != null) {
      this.terminalOutput$.unsubscribe();
    }
  }
}
