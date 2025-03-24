import { Component, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private loggingSevice : LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.loggingSevice.onStatusChanged(accountStatus)
    // console.log(`A status change occured, the new status is ${accountStatus}`);
  }
}
