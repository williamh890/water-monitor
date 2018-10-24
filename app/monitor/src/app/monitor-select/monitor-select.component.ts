import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monitor-select',
  templateUrl: './monitor-select.component.html',
  styleUrls: ['./monitor-select.component.css']
})
export class MonitorSelectComponent {
  monitorFile = '';
  @Output() newMonitorFile = new EventEmitter<string>();

  onSubmit() {
    this.newMonitorFile.emit(this.monitorFile);
  }
}
