export enum NotificationType {
  JOB = 'job',
  APPLICATION = 'application',
  SYSTEM = 'system',
}

export interface Notification {
  id: number;
  type: NotificationType;
  message: string;
}
