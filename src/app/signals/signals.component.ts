import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-signals',
    imports: [CommonModule],
    template: `
    <div class="user-profile">
      <h1>User Dashboard</h1>
      <div class="status-indicator" [class]="userStatus()">
        <span class="status-dot"></span>
        Status: {{ userStatus() }}
      </div>

      <div class="status-info">
        <div class="notifications">
          <strong>Notifications:</strong>
          <ng-container *ngIf="notificationsEnabled(); else notifOff">Enabled</ng-container>
          <ng-template #notifOff>Disabled</ng-template>
        </div>
        <div class="message">
          <strong>Message:</strong>
          {{ statusMessage() }}
        </div>
        <div class="working-hours">
          <strong>Within Working Hours:</strong>
          <ng-container *ngIf="isWithinWorkingHours(); else outsideHours">Yes</ng-container>
          <ng-template #outsideHours>No</ng-template>
        </div>
      </div>

      <div class="status-controls">
        <button (click)="goOnline()" [disabled]="userStatus() === 'online'">Go Online</button>
        <button (click)="goAway()" [disabled]="userStatus() === 'away'">Set Away</button>
        <button (click)="goOffline()" [disabled]="userStatus() === 'offline'">Go Offline</button>
        <button (click)="toggleStatus()" class="toggle-btn">Cycle Status</button>
      </div>
    </div>
  `,
    styleUrls: ['./signals.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  userStatus = signal<'online' | 'away' | 'offline'>('offline');

  notificationsEnabled = computed(() => this.userStatus() === 'online');

  statusMessage = computed(() => {
    const status = this.userStatus();
    switch (status) {
      case 'online':
        return 'Available for meetings and messages';
      case 'away':
        return 'Temporarily away, will respond soon';
      case 'offline':
        return 'Not available, check back later';
      default:
        return 'Status unknown';
    }
  });

  isWithinWorkingHours = computed(() => {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() > 0 && now.getDay() < 6;
    return isWeekday && hour >= 9 && hour < 17 && this.userStatus() !== 'offline';
  });

  goOnline() {
    this.userStatus.set('online');
  }

  goAway() {
    this.userStatus.set('away');
  }

  goOffline() {
    this.userStatus.set('offline');
  }

  toggleStatus() {
    const current = this.userStatus();
    switch (current) {
      case 'offline':
        this.userStatus.set('online');
        break;
      case 'online':
        this.userStatus.set('away');
        break;
      case 'away':
        this.userStatus.set('offline');
        break;
    }
  }
}
