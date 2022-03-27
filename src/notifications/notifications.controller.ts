import {
  Controller,
  Get,
  Post,
  Response,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification, NotificationType } from './notifications.type';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('/')
  getNotificationsList(): Promise<Notification[]> {
    return this.notificationsService.getNotificationsList();
  }

  @Post('/')
  async addUser(@Response() res, @Body('message') message: string) {
    try {
      const notification: Notification =
        await this.notificationsService.addNotification(
          message,
          NotificationType.APPLICATION,
        );
      res.status(HttpStatus.CREATED).send(notification);
    } catch (e) {
      res.status(HttpStatus.CONFLICT).json(`Notification can't be added`);
    }
  }
}
