import { Injectable } from '@nestjs/common';
import { Notification, NotificationType } from './notifications.type';

@Injectable()
export class NotificationsService {
  private NOTIFICATIONS: Notification[] = [];
  private count = 0;

  getNotificationsList(): Promise<Notification[]> {
    return new Promise<Notification[]>((resolve) => {
      resolve(this.NOTIFICATIONS);
    });
  }

  addNotification(
    message: string,
    type: NotificationType,
  ): Promise<Notification> {
    return new Promise<Notification>((resolve) => {
      const notification: Notification = {
        id: ++this.count,
        type,
        message,
      };
      console.log(notification);
      this.NOTIFICATIONS.push(notification);
      resolve(notification);
    });
  }
}
