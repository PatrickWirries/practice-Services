import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor() {}
  loggingService = inject(LoggingService);

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.onStatusChanged(status);
    // console.log(`A status change occured, the new status is ${status}`);
  }
}
