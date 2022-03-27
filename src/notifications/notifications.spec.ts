import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { NotificationType } from './notifications.type';

const NOTIFICATION = {
  id: 1,
  type: 'application',
  message: 'Test Notification',
};

describe('NotificationsService', () => {
  let notificationsService: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsService],
    }).compile();

    notificationsService =
      module.get<NotificationsService>(NotificationsService);
  });

  it('NotificationsService - should be defined', () => {
    expect(NotificationsService).toBeDefined();
  });

  describe('addNotification', () => {
    it('should add notification', async () => {
      const addedNotification = await notificationsService.addNotification(
        NOTIFICATION.message,
        NotificationType.APPLICATION,
      );
      expect(addedNotification).toEqual(NOTIFICATION);

      const expectedList = [NOTIFICATION];
      const list = await notificationsService.getNotificationsList();
      expect(list).toEqual(expectedList);
    });
  });
});
