export interface BoardItem {
  title: string;
  date: Date | string;
  order: number;
  id: string;
  messagesCount: number;
  notificationsCount: number;
}
