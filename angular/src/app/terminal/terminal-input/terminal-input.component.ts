import { Component, OnInit } from '@angular/core';
import { TerminalService } from '../terminal.service';

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit {

  constructor(private terminalService: TerminalService) { }

  ngOnInit(): void {
  }

  onEnter(cmd: string): void {
    this.terminalService.executeCommand(cmd);
  }
}
