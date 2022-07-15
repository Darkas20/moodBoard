import { BoardItem } from 'interfaces/board';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

export const boardItems = [
  {
    title: 'Test',
    date: dayjs().toISOString(),
    id: uuid(),
    notificationsCount: 1,
    messagesCount: 0,
  },
  {
    title: 'Tes2',
    date: dayjs().toISOString(),
    id: uuid(),
    notificationsCount: 0,
    messagesCount: 2,
  },
  {
    title: 'Test3',
    date: dayjs().toISOString(),
    id: uuid(),
    notificationsCount: 0,
    messagesCount: 0,
  },
] as BoardItem[];
